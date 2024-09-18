"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadDocsAuth = exports.uploadSupportingDocs = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("./../config");
const multer_1 = __importDefault(require("multer"));
const fs_1 = require("fs");
const path_1 = require("path");
let supportDocs = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        let dest = (0, path_1.join)(global.appRoot, `/uploads/docs/${req.params.id}`);
        if (!(0, fs_1.existsSync)((0, path_1.join)(global.appRoot, '/uploads/docs')))
            (0, fs_1.mkdirSync)((0, path_1.join)(global.appRoot, '/uploads/docs'));
        if (!(0, fs_1.existsSync)(dest))
            (0, fs_1.mkdirSync)(dest);
        cb(null, dest);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
exports.uploadSupportingDocs = (0, multer_1.default)({ dest: '/uploads/docs', storage: supportDocs });
const uploadDocsAuth = (req, res, next) => {
    var _a;
    let auth = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ');
    if (auth === undefined)
        return res.status(400).json({ msg: 'Unauthorized' });
    if (!jwt.verify(auth[1], config_1.env.JWT_SECRET))
        return res.status(400).json({ msg: 'Expired' });
    return next();
};
exports.uploadDocsAuth = uploadDocsAuth;
