"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadStaycationMedia = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = require("fs");
const path_1 = require("path");
let staycationGalleryStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        let dest = (0, path_1.join)(global.appRoot, `/uploads/staycation/${req.body.serverDirName}`);
        if (!(0, fs_1.existsSync)((0, path_1.join)(global.appRoot, '/uploads/staycation')))
            (0, fs_1.mkdirSync)((0, path_1.join)(global.appRoot, '/uploads/staycation'));
        if (!(0, fs_1.existsSync)(dest))
            (0, fs_1.mkdirSync)(dest);
        cb(null, dest);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
exports.uploadStaycationMedia = (0, multer_1.default)({ dest: '/uploads/staycation', storage: staycationGalleryStorage });
