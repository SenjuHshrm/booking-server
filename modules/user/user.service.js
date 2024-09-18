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
const PersonalAccessToken_schema_1 = require("./../auth/schema/PersonalAccessToken.schema");
const User_schema_1 = __importDefault(require("./schema/User.schema"));
const Auth_schema_1 = __importDefault(require("../auth/schema/Auth.schema"));
const utils_1 = require("./../../utils");
const ProprietorApplication_schema_1 = __importDefault(require("./schema/ProprietorApplication.schema"));
const Staycation_schema_1 = __importDefault(require("./../staycation/schema/Staycation.schema"));
const Wishlist_schema_1 = __importDefault(require("./schema/Wishlist.schema"));
const path_1 = require("path");
const payment_service_1 = __importDefault(require("./../payment/payment.service"));
const UserVerification_schema_1 = __importDefault(require("./schema/UserVerification.schema"));
const NotificationCount_schema_1 = __importDefault(require("./../notification/schema/NotificationCount.schema"));
let register = (res, u) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = new User_schema_1.default({
            name: {
                fName: u.fName,
                mName: "",
                lName: u.lName,
                xName: "",
            },
            status: "active",
            identificationStat: "pending",
            approvedAsProprietorOn: "",
        });
        user.setImg("", u.email);
        user.save();
        // let newPassword = randomPassword()
        let auth = new Auth_schema_1.default({
            userId: user.id,
            email: u.email,
            access: ["customer"],
        });
        auth.generateHash(u.password);
        auth.save();
        // sendPassword(u.email, newPassword)
        payment_service_1.default.addCustomer(user.id, u, "");
        new Wishlist_schema_1.default({ user: user.id, staycation: [] }).save();
        new NotificationCount_schema_1.default({ user: user.id, notif: 0, msg: 0 }).save();
        let token = auth.generateToken(user.img);
        new PersonalAccessToken_schema_1.PersonalAccessToken({
            userId: auth.userId,
            accessToken: token.access,
            refreshToken: token.refresh
        }).save();
        return res.status(201).json({ token: token.access });
    }
    catch (e) {
        (0, utils_1.logger)("user.controller", "register", e.message, "USR-0001");
        return res.status(500).json({ code: "USR-0001" });
    }
});
let getUsersByAccess = (res, access, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let total = yield Auth_schema_1.default.countDocuments({ access }).exec();
        let auth = (yield Auth_schema_1.default.find({ access }, { password: 0 })
            .populate({ path: "userId", select: "name status img" })
            .skip(page)
            .limit(limit)
            .exec());
        return res.status(200).json({
            total,
            auth,
        });
    }
    catch (e) {
        (0, utils_1.logger)("user.controller", "getUsersByAccess", e.message, "USR-0002");
        return res.status(500).json({ code: "USR-0002" });
    }
});
let getProprietorApplications = (res, page, limit, status) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let pipelineMatch = {};
        // if (approvedAsProprietorOn === undefined) {
        //   pipelineMatch = {
        //     $or: [
        //       { "user.approvedAsProprietorOn": { $ne: "" } },
        //       { "user.approvedAsProprietorOn": "" },
        //     ],
        //   };
        // } else {
        //   if (approvedAsProprietorOn === "true") {
        //     pipelineMatch = { "user.approvedAsProprietorOn": { $ne: "" } };
        //   } else {
        //     pipelineMatch = { "user.approvedAsProprietorOn": "" };
        //   }
        // }
        // let propApp = await ProprietorApplication.aggregate([
        //   {
        //     $lookup: {
        //       from: "users",
        //       localField: "userId",
        //       foreignField: "_id",
        //       as: "user",
        //     },
        //   },
        //   {
        //     $match: pipelineMatch,
        //   },
        //   {
        //     $project: {
        //       _id: 1,
        //       userId: 1,
        //       createdAt: 1,
        //       updatedAt: 1,
        //       "user.name": 1,
        //       "user.img": 1,
        //       "user.approvedAsProprietorOn": 1,
        //     },
        //   },
        //   {
        //     $facet: {
        //       paginatedResults: [{ $skip: page }, { $limit: limit }],
        //       totalCount: [{ $count: "count" }],
        //     },
        //   },
        // ]).exec();
        // return res.status(200).json(propApp);
        let filter = {};
        if (status !== undefined)
            filter = { status };
        let total = yield ProprietorApplication_schema_1.default.countDocuments(filter).exec();
        let list = (yield ProprietorApplication_schema_1.default.find(filter).populate([{ path: 'user', select: '_id name img' }, { path: 'listings', select: '_id name' }]).skip(page).limit(limit).exec());
        return res.status(200).json({ total, list });
    }
    catch (e) {
        (0, utils_1.logger)("user.controller", "getProprietorApplications", e.message, "USR-0003");
        return res.status(500).json({ code: "USR-0003" });
    }
});
let setAsProprietor = (res, userId, staycationId, propAppId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Auth_schema_1.default.findOneAndUpdate({ userId }, { $push: { access: "host" } }).exec();
        yield User_schema_1.default.findByIdAndUpdate(userId, {
            $set: { approvedAsProprietorOn: new Date().toISOString() },
        }).exec();
        yield ProprietorApplication_schema_1.default.findOneAndUpdate({ user: userId }, { $set: { status: 'approved' } }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)("user.controller", "setAsProprietor", e.message, "USR-0004");
        return res.status(500).json({ code: "USR-0004" });
    }
});
let addAdmin = (res, u) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = new User_schema_1.default({
            name: {
                fName: u.fName,
                mName: "",
                lName: u.lName,
                xName: "",
            },
            status: "active",
            identificationStat: "pending",
        });
        user.setImg(u.imgFile, u.email);
        user.save();
        let auth = new Auth_schema_1.default({
            email: u.email,
            userId: user.id,
            access: ["admin"],
        });
        auth.generateHash(u.password);
        auth.save();
        (0, utils_1.sendPassword)(u.email, u.password);
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)("user.controller", "addAdmin", e.message, "USR-0005");
        return res.status(500).json({ code: "USR-0005" });
    }
});
let getUserProfile = (res, _id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let auth = (yield Auth_schema_1.default.findOne({ userId: _id }, { email: 1, access: 1 }).exec());
        let user = yield User_schema_1.default.findById(_id).exec();
        let prop = (yield Staycation_schema_1.default.find({ host: _id }).exec());
        return res.status(200).json({
            auth: {
                email: auth.email,
                access: auth.access,
            },
            profile: user.toJSON(),
            properties: prop,
        });
    }
    catch (e) {
        (0, utils_1.logger)("user.controller", "getUserProfile", e.message, "USR-0006");
        return res.status(500).json({ code: "USR-0006" });
    }
});
let updateUserProfile = (res, profile, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield User_schema_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, profile) }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)("user.controller", "updateUserProfile", e.message, "USR-0007");
        return res.status(500).json({ code: "USR-0007" });
    }
});
let getWishlistByUser = (res, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let wl = (yield Wishlist_schema_1.default.find({ user }).populate("staycation").exec());
        return res.status(200).json(wl);
    }
    catch (e) {
        (0, utils_1.logger)("user.controller", "getWishlistByUser", e.message, "USR-0008");
        return res.status(500).json({ code: "USR-0008" });
    }
});
let getUserProfileImg = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield User_schema_1.default.findById(id).exec();
        return res
            .setHeader("Content-Type", "image/*")
            .status(200)
            .sendFile((0, path_1.join)(global.appRoot, `/uploads${user.img}`));
    }
    catch (e) {
        (0, utils_1.logger)("user.controller", "getUserProfileImg", e.message, "USR-0009");
        return res.status(500).json({ code: "USR-0009" });
    }
});
let addToWishList = (res, user, staycation) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Wishlist_schema_1.default.findOneAndUpdate({ user }, { $push: { staycation } });
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)("user.controller", "addToWishList", e.message, "USR-0010");
        return res.status(500).json({ code: "USR-0010" });
    }
});
let removeToWishlist = (res, user, staycation) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Wishlist_schema_1.default.findOneAndUpdate({ user }, { $pull: { staycation } }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)("user.controller", "removeToWishlist", e.message, "USR-0011");
        return res.status(500).json({ code: "USR-0011" });
    }
});
let checkWishList = (res, user, staycation) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let wl = (yield Wishlist_schema_1.default.findOne({ user, staycation }).exec());
        if (!wl)
            return res.status(404).json({ code: "not-found" });
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)("user.controller", "checkWishlist", e.message, "USR-0012");
        return res.status(500).json({ code: "USR-0012" });
    }
});
let verificationUpdateProfile = (res, data, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let updates;
        const options = { new: true };
        if (data.type === "name") {
            updates = {
                $set: {
                    "name.fName": data.fName,
                    "name.lName": data.lName,
                },
            };
        }
        if (data.type === "address") {
            updates = {
                $set: {
                    "address.unit": data.unit,
                    "address.street": data.street,
                    "address.brgy": data.brgy,
                    "address.city": data.city,
                    "address.province": data.province,
                    "address.country": data.country,
                    "address.zip": data.zip,
                },
            };
        }
        if (data.type === "contact") {
            updates = { $set: { contact: data.contact } };
        }
        const updated = yield User_schema_1.default.findByIdAndUpdate(id, updates, options)
            .select("name address contact -_id")
            .exec();
        return res.status(200).json({ success: true, profile: updated });
    }
    catch (e) {
        (0, utils_1.logger)("user.controller", "verificationUpdateProfile", e.message, "USR-0013");
        return res.status(500).json({ code: "USR-0007" });
    }
});
let uploadVerification = (res, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        new UserVerification_schema_1.default(Object.assign({}, data)).save();
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'uploadVerification', e.message, 'USR-0008');
        return res.status(500).json({ code: 'USR-0008' });
    }
});
let setUserVerificationStatus = (res, id, status) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield UserVerification_schema_1.default.findByIdAndUpdate(id, { $set: { status } }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'setUserVerification', e.message, 'USR-0009');
        return res.status(500).json({ code: 'USR-0009' });
    }
});
let getUserIDVerification = (res, page, limit, name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let aggregate = [
            {
                $lookup: {
                    from: 'users',
                    localField: 'user',
                    foreignField: '_id',
                    as: 'userInfo'
                }
            }
        ];
        if (name === undefined) {
            aggregate.push({
                $match: {
                    $or: [
                        { 'userInfo.name.fName': { $ne: '' } },
                        { 'userInfo.name.fName': '' }
                    ]
                }
            });
        }
        else {
            aggregate.push({
                $match: { 'userInfo.name.fName': { $regex: new RegExp(`${name}`), $options: 'imu' } }
            });
        }
        aggregate.push({
            $project: {
                _id: 1,
                user: 1,
                idFront: 1,
                idBack: 1,
                createdAt: 1,
                updatedAt: 1,
                'userInfo._id': 1,
                'userInfo.name': 1,
                'userInfo.img': 1,
                type: 1,
                status: 1
            }
        }, {
            $facet: {
                paginatedResults: [{ $skip: page }, { $limit: limit }],
                totalCount: [{ $count: 'count' }]
            }
        });
        let users = yield UserVerification_schema_1.default.aggregate(aggregate).exec();
        return res.status(200).json(users);
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'getUserIDVerification', e.message, 'USR-0010');
        return res.status(500).json({ code: 'USR-0010' });
    }
});
let getUserVerificationStatus = (res, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userStat = (yield UserVerification_schema_1.default.findOne({ user }).exec());
        if (!userStat)
            return res.status(404).json({ msg: 'User verification not found' });
        return res.status(200).json({ status: userStat.status });
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'getUserVerificationStatus', e.message, 'USR-0011');
        return res.status(500).json({ code: 'USR-0011' });
    }
});
let requestSupportingDocs = (res, user, staycation, date) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let link = (0, utils_1.generateJWTSupportingDocsLink)(date, user, staycation);
        let auth = (yield Auth_schema_1.default.findOne({ userId: user }).exec());
        (0, utils_1.sendUploadLinkSupportDocs)(auth.email, link);
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'requestSupportingDocs', e.message, 'USR-0012');
        return res.status(500).json({ code: 'USR-0012' });
    }
});
let updatePropApplication = (res, user, docs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ProprietorApplication_schema_1.default.findOneAndUpdate({ user }, { $push: { documents: Object.assign({}, docs) } }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('user.controller', 'requestSupportingDocs', e.message, 'USR-0013');
        return res.status(500).json({ code: 'USR-0013' });
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
    getWishlistByUser,
    getUserProfileImg,
    addToWishList,
    removeToWishlist,
    checkWishList,
    verificationUpdateProfile,
    uploadVerification,
    setUserVerificationStatus,
    getUserIDVerification,
    getUserVerificationStatus,
    requestSupportingDocs,
    updatePropApplication
};
exports.default = UserService;
