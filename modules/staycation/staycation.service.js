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
const Booking_schema_1 = __importDefault(require("../booking/schema/Booking.schema"));
const utils_1 = require("./../../utils");
const RecentLocationSearch_schema_1 = __importDefault(require("./schema/RecentLocationSearch.schema"));
const Auth_schema_1 = __importDefault(require("./../auth/schema/Auth.schema"));
let applyProprietorship = (res, form) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let staycation: IStaycationSchema = await new Staycation({ ...form }).save()
        // let user: IUserSchema = <IUserSchema>(await User.findById(form.host).exec())
        // if(!user.status.includes('host')) {
        //   await new ProprietorApplication({
        //     user: form.host,
        //     status: 'pending',
        //     documents,
        //     listings: [staycation.id]
        //   }).save()
        // }
        let staycation = yield new Staycation_schema_1.default(Object.assign({}, form)).save();
        let auth = (yield Auth_schema_1.default.findOne({ userId: form.host }).exec());
        if (auth.access.indexOf("host") === -1) {
            new ProprietorApplication_schema_1.default({
                user: form.host,
                status: "pending",
                listings: [staycation.id],
                documents: [],
            }).save();
        }
        else {
            yield ProprietorApplication_schema_1.default.findOneAndUpdate({ user: form.host }, { $push: { listings: staycation.id } }).exec();
        }
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "applyProprietorship", e.message, "STC-0001");
        return res.status(500).json({ code: "STC-0001" });
    }
});
let getListings = (res, page, limit, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let filterQuery = {};
        Object.keys(query).forEach((x) => {
            if (query[x] !== undefined)
                filterQuery[x] = query[x];
        });
        console.log(filterQuery);
        let total = yield Staycation_schema_1.default.countDocuments(Object.assign({}, filterQuery)).exec();
        let listings = (yield Staycation_schema_1.default.find(Object.assign({}, filterQuery))
            .populate({ path: "host", select: "_id name img" })
            .skip(page)
            .limit(limit)
            .exec());
        return res.status(200).json({ total, listings });
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "getListings", e.message, "STC-0002");
        return res.status(500).json({ code: "STC-0002" });
    }
});
let updateStaycation = (res, id, form) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        Staycation_schema_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, form) });
        return res.sendStatus(200);
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "updateStaycation", e.message, "STC-0003");
        return res.status(500).json({ code: "STC-0003" });
    }
});
let updateListing = (res, id, isListed) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Staycation_schema_1.default.findByIdAndUpdate(id, { $set: { isListed } }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "updateListing", e.message, "STC-0004");
        return res.status(500).json({ code: "STC-0004" });
    }
});
let removeStaycation = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        Staycation_schema_1.default.findByIdAndDelete(id);
        Review_schema_1.default.deleteMany({ staycation: id });
        return res.sendStatus(200);
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "removeStaycation", e.message, "STC-0005");
        return res.status(500).json({ code: "STC-0005" });
    }
});
let getHostListing = (res, userId, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let total = yield Staycation_schema_1.default.countDocuments({ host: userId }).exec();
        let listings = (yield Staycation_schema_1.default.find({ host: userId }).skip(page).limit(limit).exec());
        return res.status(200).json({ total, listings });
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "getHostListing", e.message, "STC-0006");
        return res.status(500).json({ code: "STC-0005" });
    }
});
let getDetails = (res, _id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let detail = (yield Staycation_schema_1.default.findById(_id)
            .populate({ path: "host", select: "name img approvedAsProprietorOn" })
            .exec());
        return res.status(200).json(detail);
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "getDetails", e.message, "STC-0007");
        return res.status(500).json({ code: "STC-0007" });
    }
});
let getGallery = (res, _id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let detail = (yield Staycation_schema_1.default.findById(_id, { media: 1 }).exec());
        let gallery = detail.genImgList, cover = detail.cover;
        return res.status(200).json({ gallery, cover });
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "getGallery", e.message, "STC-0008");
        return res.status(500).json({ code: "STC-0008" });
    }
});
let getRecentSearches = (res, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let recSearch = (yield RecentLocationSearch_schema_1.default.findOne({ user }));
        if (!recSearch)
            return res.status(404).json([]);
        return res.status(200).json(recSearch.recentSearches);
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "getRecentSearches", e.message, "STC-0009");
        return res.status(500).json({ code: "STC-0009" });
    }
});
let updateStaycationFromAdmin = (res, id, form) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        Staycation_schema_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, form) }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "updateStaycation", e.message, "STC-0010");
        return res.status(500).json({ code: "STC-0010" });
    }
});
let getAllStaycations = (res, page, limit, name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let filter = {};
        if (name !== undefined)
            filter = { name: { $regex: new RegExp(`^${name}`), $options: "imu" } };
        let total = yield Staycation_schema_1.default.countDocuments(filter).exec();
        let list = yield Staycation_schema_1.default.find(filter)
            .populate({ path: "host", select: "_id name img" })
            .skip(page)
            .limit(limit)
            .exec();
        let resp = Promise.all(list.map((ls) => __awaiter(void 0, void 0, void 0, function* () {
            let prop = yield ProprietorApplication_schema_1.default.findOne({
                user: ls.host,
                "documents.staycationId": ls.id,
            }).exec();
            if (prop) {
                let i = prop.documents.findIndex((d) => d.staycationId === ls.id);
                return Object.assign(Object.assign({}, ls._doc), { documents: prop === null || prop === void 0 ? void 0 : prop.documents[i] });
            }
            return Object.assign(Object.assign({}, ls._doc), { documents: null });
        })));
        return res.status(200).json({ total, list: yield resp });
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "updateStaycation", e.message, "STC-0011");
        return res.status(500).json({ code: "STC-0011" });
    }
});
let reviewStaycation = (res, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield new Review_schema_1.default(Object.assign({}, data)).save();
        return res.status(201).json({
            success: true,
            review: yield review.populate({ path: "user", select: "_id name img" }),
        });
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "reviewStaycation", e.message, "STC-0012");
        return res.status(500).json({ code: "STC-0012" });
    }
});
let listReviewsByStaycation = (res, staycation, offset, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let total = yield Review_schema_1.default.countDocuments({ staycation }).exec();
        let list = (yield Review_schema_1.default.find({ staycation })
            .populate({ path: "user", select: "_id name img" })
            .sort({ createdAt: -1 })
            .skip(offset)
            .limit(limit)
            .exec());
        return res.status(200).json({ total, list });
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "listReviewsByStaycation", e.message, "STC-0013");
        return res.status(500).json({ code: "STC-0013" });
    }
});
let averageRatingPerStaycation = (res, staycation) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let total = yield Review_schema_1.default.countDocuments({ staycation }).exec();
        let ratings = yield Review_schema_1.default.aggregate([
            {
                $group: {
                    _id: staycation,
                    total: {
                        $sum: "$rating",
                    },
                },
            },
        ]).exec();
        let av = (ratings[0].total / total).toFixed(1);
        return res.status(200).json({ average: Number(av) });
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "averageRatingPerStaycation", e.message, "STC-0014");
        return res.status(500).json({ code: "STC-0014" });
    }
});
let checkDidCheckout = (res, userId, staycationId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const didCheckout = yield Booking_schema_1.default.findOne({
            initiatedBy: userId,
            bookTo: staycationId,
            checkOutDate: { $exists: true, $ne: "" },
        }).exec();
        return res.status(200).json({ didCheckOut: didCheckout ? true : false });
    }
    catch (e) {
        (0, utils_1.logger)("staycation.controller", "checkDidCheckout", e.message, "STC-0015");
        return res.status(500).json({ code: "STC-0015" });
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
    getGallery,
    getRecentSearches,
    updateStaycationFromAdmin,
    getAllStaycations,
    reviewStaycation,
    listReviewsByStaycation,
    averageRatingPerStaycation,
    checkDidCheckout,
};
exports.default = StaycationService;
