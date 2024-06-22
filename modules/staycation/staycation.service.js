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
const Staycation_schema_1 = __importDefault(require("./schema/Staycation.schema"));
const ProprietorApplication_schema_1 = __importDefault(require("./../user/schema/ProprietorApplication.schema"));
const Review_schema_1 = __importDefault(require("./schema/Review.schema"));
const utils_1 = require("./../../utils");
const User_schema_1 = __importDefault(require("../user/schema/User.schema"));
let applyProprietorship = (res, form) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let staycation = yield new Staycation_schema_1.default(Object.assign({}, form)).save();
        let user = (yield User_schema_1.default.findById(form.host).exec());
        if (!user.status.includes('host')) {
            yield new ProprietorApplication_schema_1.default({ userId: form.host, staycationId: staycation.id }).save();
        }
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('staycation.controller', 'applyProprietorship', e.message, 'STC-0001');
        return res.status(500).json({ code: 'STC-0001' });
    }
});
let getListings = (res, page, limit, isListed) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let total = yield Staycation_schema_1.default.countDocuments({ isListed }).exec();
        let listings = (yield Staycation_schema_1.default.find({ isListed }).populate('host', { path: "_id name img" }).skip(page).limit(limit).exec());
        return res.status(200).json({ total, listings });
    }
    catch (e) {
        (0, utils_1.logger)('staycation.controller', 'getListings', e.message, 'STC-0002');
        return res.status(500).json({ code: 'STC-0002' });
    }
});
let updateStaycation = (res, id, form) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        Staycation_schema_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, form) });
        return res.sendStatus(200);
    }
    catch (e) {
        (0, utils_1.logger)('staycation.controller', 'updateStaycation', e.message, 'STC-0003');
        return res.status(500).json({ code: 'STC-0003' });
    }
});
let updateListing = (res, id, isListed) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Staycation_schema_1.default.findByIdAndUpdate(id, { $set: { isListed } }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('staycation.controller', 'updateListing', e.message, 'STC-0004');
        return res.status(500).json({ code: 'STC-0004' });
    }
});
let removeStaycation = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        Staycation_schema_1.default.findByIdAndDelete(id);
        Review_schema_1.default.deleteMany({ staycation: id });
        return res.sendStatus(200);
    }
    catch (e) {
        (0, utils_1.logger)('staycation.controller', 'removeStaycation', e.message, 'STC-0005');
        return res.status(500).json({ code: 'STC-0005' });
    }
});
let getHostListing = (res, userId, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let total = yield Staycation_schema_1.default.countDocuments({ host: userId, isApproved: true }).exec();
        let listings = (yield Staycation_schema_1.default.find({ host: userId, isApproved: true }).skip(page).limit(limit).exec());
        return res.status(200).json({ total, listings });
    }
    catch (e) {
        (0, utils_1.logger)('staycation.controller', 'getHostListing', e.message, 'STC-0006');
        return res.status(500).json({ code: 'STC-0005' });
    }
});
let getDetails = (res, _id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let detail = (yield Staycation_schema_1.default.findById(_id).populate({ path: 'host', select: 'name img' }).exec());
        return res.status(200).json(detail);
    }
    catch (e) {
        (0, utils_1.logger)('staycation.controller', 'getDetails', e.message, 'STC-0007');
        return res.status(500).json({ code: 'STC-0007' });
    }
});
let getGallery = (res, _id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let detail = (yield Staycation_schema_1.default.findById(_id, { media: 1 }).exec());
        let resp = [];
        resp.push(detail.media.cover);
        detail.media.imgs.forEach((img) => {
            resp.push(img);
        });
        return res.status(200).json(resp);
    }
    catch (e) {
        (0, utils_1.logger)('staycation.controller', 'getGallery', e.message, 'STC-0008');
        return res.status(500).json({ code: 'STC-0008' });
    }
});
const StaycationService = {
    applyProprietorship,
    getListings,
    updateStaycation,
    updateListing,
    removeStaycation,
    getHostListing,
    getDetails,
    getGallery
};
exports.default = StaycationService;
