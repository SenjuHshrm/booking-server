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
const FAQs_schema_1 = __importDefault(require("./schema/FAQs.schema"));
const utils_1 = require("./../../utils");
let addFAQ = (res, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        new FAQs_schema_1.default(Object.assign({}, data)).save();
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('faqs.controller', 'addFAQ', e.message, 'FAQ-0001');
        return res.status(500).json({ code: 'FAQ-0001' });
    }
});
let updateFAQ = (res, id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield FAQs_schema_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('faqs.controller', 'updateFAQ', e.message, 'FAQ-0002');
        return res.status(500).json({ code: 'FAQ-0002' });
    }
});
let deleteFAQ = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield FAQs_schema_1.default.findByIdAndDelete(id).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('faqs.controller', 'deleteFAQ', e.message, 'FAQ-0003');
        return res.status(500).json({ code: 'FAQ-0003' });
    }
});
let getFAQs = (res, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let total = yield FAQs_schema_1.default.countDocuments({}).exec();
        let faqs = (yield FAQs_schema_1.default.find({}).populate({ path: 'addedBy', select: '_id name img' }).skip(page).limit(limit).exec());
        return res.status(200).json({ total, faqs });
    }
    catch (e) {
        (0, utils_1.logger)('faqs.controller', 'getFAQs', e.message, 'FAQ-0004');
        return res.status(500).json({ code: 'FAQ-0004' });
    }
});
let getActiveFAQs = (res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let faqs = (yield FAQs_schema_1.default.find({ isActive: true }).exec());
        return res.status(200).json(faqs);
    }
    catch (e) {
        (0, utils_1.logger)('faqs.controller', 'getActiveFAQs', e.message, 'FAQ-0005');
        return res.status(500).json({ code: 'FAQ-0005' });
    }
});
const FAQsService = {
    addFAQ,
    updateFAQ,
    deleteFAQ,
    getFAQs,
    getActiveFAQs
};
exports.default = FAQsService;
