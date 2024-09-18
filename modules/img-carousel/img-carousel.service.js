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
const ImgCarouselLoc_schema_1 = __importDefault(require("./schema/ImgCarouselLoc.schema"));
const ImgCarouselFront_schema_1 = __importDefault(require("./schema/ImgCarouselFront.schema"));
const utils_1 = require("./../../utils");
const fs_1 = require("fs");
const path_1 = require("path");
let addImgFront = (res, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield new ImgCarouselFront_schema_1.default(Object.assign({}, data)).save();
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('img-carousel.controller', 'addImgFront', e.message, 'IMC-0001');
        return res.status(500).json({ code: 'IMC-0001' });
    }
});
let addImgLoc = (res, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield new ImgCarouselLoc_schema_1.default(Object.assign({}, data)).save();
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('img-carousel.controller', 'addImgLoc', e.message, 'IMC-0002');
        return res.status(500).json({ code: 'IMC-0002' });
    }
});
let updateImgFront = (res, id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ImgCarouselFront_schema_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('img-carousel.controller', 'udpateImgFront', e.message, 'IMC-0003');
        return res.status(500).json({ code: 'IMC-0003' });
    }
});
let updateImgLoc = (res, id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield ImgCarouselLoc_schema_1.default.findByIdAndUpdate(id, { $set: Object.assign({}, data) }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('img-carousel.controller', 'updateImgLoc', e.message, 'IMC-0004');
        return res.status(500).json({ code: 'IMC-0004' });
    }
});
let deleteImgFront = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let del = (yield ImgCarouselFront_schema_1.default.findByIdAndDelete(id).exec());
        (0, fs_1.unlinkSync)((0, path_1.join)(global.appRoot, `/uploads/${del.img}`));
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('img-carousel.controller', 'deleteImgFront', e.message, 'IMC-0005');
        return res.status(500).json({ code: 'IMC-0005' });
    }
});
let deleteImgLoc = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let del = (yield ImgCarouselLoc_schema_1.default.findByIdAndDelete(id).exec());
        (0, fs_1.unlinkSync)((0, path_1.join)(global.appRoot, `/uploads/${del.img}`));
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('img-carousel.controller', 'deleteImgLoc', e.message, 'IMC-0006');
        return res.status(500).json({ code: 'IMC-0006' });
    }
});
let getImgFront = (res, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let total = yield ImgCarouselFront_schema_1.default.countDocuments({}).exec();
        let list = (yield ImgCarouselFront_schema_1.default.find({}).skip(page).limit(limit).exec());
        return res.status(200).json({ total, list });
    }
    catch (e) {
        (0, utils_1.logger)('img-carousel.controller', 'getImgFront', e.message, 'IMC-0007');
        return res.status(500).json({ code: 'IMC-0007' });
    }
});
let getImgLoc = (res, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let total = yield ImgCarouselLoc_schema_1.default.countDocuments({}).exec();
        let list = (yield ImgCarouselLoc_schema_1.default.find({}).skip(page).limit(limit).exec());
        return res.status(200).json({ total, list });
    }
    catch (e) {
        (0, utils_1.logger)('img-carousel.controller', 'getImgLoc', e.message, 'IMC-0008');
        return res.status(500).json({ code: 'IMC-0008' });
    }
});
let getActiveImgFront = (res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let imgs = (yield ImgCarouselFront_schema_1.default.find({ isActive: true }).exec());
        return res.status(200).json(imgs);
    }
    catch (e) {
        (0, utils_1.logger)('img-carousel.controller', 'getActiveImgFront', e.message, 'IMC-0009');
        return res.status(500).json({ code: 'IMC-0009' });
    }
});
let getActiveImgLoc = (res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let imgs = (yield ImgCarouselLoc_schema_1.default.find({ isActive: true }).exec());
        return res.status(200).json(imgs);
    }
    catch (e) {
        (0, utils_1.logger)('img-carousel.controller', 'getActiveImgLoc', e.message, 'IMC-0010');
        return res.status(500).json({ code: 'IMC-0010' });
    }
});
const ImgCarouselService = {
    addImgFront,
    addImgLoc,
    updateImgFront,
    updateImgLoc,
    deleteImgFront,
    deleteImgLoc,
    getImgFront,
    getImgLoc,
    getActiveImgFront,
    getActiveImgLoc
};
exports.default = ImgCarouselService;
