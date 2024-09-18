"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadUserVerification = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = require("fs");
const path_1 = require("path");
let userVerificationStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        let destUV = (0, path_1.join)(global.appRoot, `/uploads/user-verification/${req.body.id}`);
        if (!(0, fs_1.existsSync)((0, path_1.join)(global.appRoot, '/uploads/user-verification')))
            (0, fs_1.mkdirSync)((0, path_1.join)(global.appRoot, '/uploads/user-verification'));
        if (!(0, fs_1.existsSync)(destUV))
            (0, fs_1.mkdirSync)(destUV);
        cb(null, destUV);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
exports.uploadUserVerification = (0, multer_1.default)({ dest: '/uploads/user-verification', storage: userVerificationStorage });
