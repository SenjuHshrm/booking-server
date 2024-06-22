"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileImgStorageMedia = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = require("fs");
const path_1 = require("path");
let profileImgStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        let dest = (0, path_1.join)(global.appRoot, `/uploads/profile-img/${req.body.email}`);
        if (!(0, fs_1.existsSync)((0, path_1.join)(global.appRoot, '/uploads/profile-img')))
            (0, fs_1.mkdirSync)((0, path_1.join)(global.appRoot, '/uploads/profile-img'));
        if (!(0, fs_1.existsSync)(dest))
            (0, fs_1.mkdirSync)(dest);
        cb(null, dest);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
exports.profileImgStorageMedia = (0, multer_1.default)({ dest: '/uploads/profile-img', storage: profileImgStorage });
