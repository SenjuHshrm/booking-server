"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadCarouselFrontImg = exports.uploadCarouselLocImg = void 0;
const multer_1 = __importDefault(require("multer"));
const fs_1 = require("fs");
const path_1 = require("path");
let imgCarouselLocStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        let dest = (0, path_1.join)(global.appRoot, '/uploads/homepage/carousel-location');
        if (!(0, fs_1.existsSync)((0, path_1.join)(global.appRoot, '/uploads/homepage')))
            (0, fs_1.mkdirSync)((0, path_1.join)(global.appRoot, '/uploads/homepage'));
        if (!(0, fs_1.existsSync)(dest))
            (0, fs_1.mkdirSync)(dest);
        cb(null, dest);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
let imgCarouselFrontStorage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        let dest = (0, path_1.join)(global.appRoot, '/uploads/homepage/carousel-front');
        if (!(0, fs_1.existsSync)((0, path_1.join)(global.appRoot, '/uploads/homepage')))
            (0, fs_1.mkdirSync)((0, path_1.join)(global.appRoot, '/uploads/homepage'));
        if (!(0, fs_1.existsSync)(dest))
            (0, fs_1.mkdirSync)(dest);
        cb(null, dest);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
exports.uploadCarouselLocImg = (0, multer_1.default)({ dest: '/uploads/homepage', storage: imgCarouselLocStorage });
exports.uploadCarouselFrontImg = (0, multer_1.default)({ dest: '/uploads/homepage', storage: imgCarouselFrontStorage });
