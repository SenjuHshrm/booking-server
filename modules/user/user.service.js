"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_schema_1 = __importDefault(require("./schema/User.schema"));
const Auth_schema_1 = __importDefault(require("../auth/schema/Auth.schema"));
const utils_1 = require("./../../utils");
const ProprietorApplication_schema_1 = __importDefault(require("./schema/ProprietorApplication.schema"));
const Staycation_schema_1 = __importDefault(require("./../staycation/schema/Staycation.schema"));
const Wishlist_schema_1 = __importDefault(require("./schema/Wishlist.schema"));
let register = (res, u) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = new User_schema_1.default({
            name: {
                fName: u.fName,
                mName: '',
                lName: u.lName,
                xName: ''
            },
            status: 'active',
            identificationStat: 'pending',
        });
        user.setImg('', u.email);
        user.save();
        let newPassword = (0, utils_1.randomPassword)();
        let auth = new Auth_schema_1.default({
            userId: user.id,
            email: u.email,
            access: ['customer']
        });
        auth.generateHash(newPassword);
        auth.save();
        (0, utils_1.sendPassword)(u.email, newPassword);
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'register', e.message, 'USR-0001');
        return res.status(500).json({ code: 'USR-0001' });
    }
});
let getUsersByAccess = (res, access, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let total = yield Auth_schema_1.default.countDocuments({ access }).exec();
        let auth = (yield Auth_schema_1.default.find({ access }, { password: 0 }).populate({ path: 'userId', select: 'name status img' }).skip(page).limit(limit).exec());
        return res.status(200).json({
            total,
            auth
        });
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'getUsersByAccess', e.message, 'USR-0002');
        return res.status(500).json({ code: 'USR-0002' });
    }
});
let getProprietorApplications = (res, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let total = yield ProprietorApplication_schema_1.default.countDocuments().exec();
        let propApp = (yield ProprietorApplication_schema_1.default.find({}).populate({ path: 'userId', select: 'name img' }).populate({ path: 'staycationId' }).skip(page).limit(limit).exec());
        return res.status(200).json({ total, propApp });
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'getProprietorApplications', e.message, 'USR-0003');
        return res.status(500).json({ code: 'USR-0003' });
    }
});
let setAsProprietor = (res, userId, staycationId, propAppId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Auth_schema_1.default.findOneAndUpdate({ userId }, { $push: { access: 'host' } }).exec();
        yield Staycation_schema_1.default.findOneAndUpdate({ _id: staycationId }, { $set: { isApproved: true } }).exec();
        yield ProprietorApplication_schema_1.default.findByIdAndDelete(propAppId).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'setAsProprietor', e.message, 'USR-0004');
        return res.status(500).json({ code: 'USR-0004' });
    }
});
let addAdmin = (res, u) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = new User_schema_1.default({
            name: {
                fName: u.fName,
                mName: '',
                lName: u.lName,
                xName: ''
            },
            status: 'active',
            identificationStat: 'pending'
        });
        user.setImg(u.imgFile, u.email);
        user.save();
        let auth = new Auth_schema_1.default({
            email: u.email,
            userId: user.id,
            access: ['admin']
        });
        auth.generateHash(u.password);
        auth.save();
        (0, utils_1.sendPassword)(u.email, u.password);
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'addAdmin', e.message, 'USR-0005');
        return res.status(500).json({ code: 'USR-0005' });
    }
});
let getUserProfile = (res, _id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let auth = (yield Auth_schema_1.default.findOne({ userId: _id }, { email: 1, access: 1 }).exec());
        let user = (yield User_schema_1.default.findById(_id).exec());
        let prop = (yield Staycation_schema_1.default.find({ host: _id }).exec());
        return res.status(200).json({
            auth: {
                email: auth.email,
                access: auth.access
            },
            profile: user.toJSON(),
            properties: prop
        });
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'getUserProfile', e.message, 'USR-0006');
        return res.status(500).json({ code: 'USR-0006' });
    }
});
let updateUserProfile = (res, profile, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield User_schema_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, profile) }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'updateUserProfile', e.message, 'USR-0007');
        return res.status(500).json({ code: 'USR-0007' });
    }
});
let getWishlistByUser = (res, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let wl = (yield Wishlist_schema_1.default.find({ user }).populate('staycation').exec());
        return res.status(200).json(wl);
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'getWishlistByUser', e.message, 'USR-0008');
        return res.status(500).json({ code: 'USR-0008' });
    }
});
const UserService = {
    register,
    getUsersByAccess,
    getProprietorApplications,
    setAsProprietor,
    addAdmin,
    getUserProfile,
    updateUserProfile,
    getWishlistByUser
};
exports.default = UserService;
