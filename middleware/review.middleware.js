"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadReviewMedia = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = require("fs");
const path_1 = require("path");
let reviewMediaStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        let destRevImg = (0, path_1.join)(global.appRoot, `/uploads/staycation/${req.body.serverDirName}/reviews`);
        if (!(0, fs_1.existsSync)(destRevImg))
            (0, fs_1.mkdirSync)(destRevImg);
        cb(null, destRevImg);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
exports.uploadReviewMedia = (0, multer_1.default)({ dest: '/uploads/staycation', storage: reviewMediaStorage });
