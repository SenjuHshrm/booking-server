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
        // let dest: string = join(global.appRoot, `/uploads/staycation/${req.body.serverDirName}`)
        // if(!existsSync(dest)) mkdirSync(dest)
        // if(!existsSync(join(dest, '/gen-img'))) mkdirSync(join(dest, '/gen-img'))
        // dest = join(dest, '/gen-img')
        // file.fiel
        let destGenImg = (0, path_1.join)(global.appRoot, `/uploads/staycation/${req.body.serverDirName}/gen-img`);
        let destBedroom = (0, path_1.join)(global.appRoot, `/uploads/staycation/${req.body.serverDirName}/bedroom`);
        if (!(0, fs_1.existsSync)((0, path_1.join)(global.appRoot, '/uploads/staycation')))
            (0, fs_1.mkdirSync)((0, path_1.join)(global.appRoot, '/uploads/staycation'));
        if (!(0, fs_1.existsSync)((0, path_1.join)(global.appRoot, `/uploads/staycation/${req.body.serverDirName}`)))
            (0, fs_1.mkdirSync)((0, path_1.join)(global.appRoot, `/uploads/staycation/${req.body.serverDirName}`));
        if (!(0, fs_1.existsSync)(destGenImg))
            (0, fs_1.mkdirSync)(destGenImg);
        if (!(0, fs_1.existsSync)(destBedroom))
            (0, fs_1.mkdirSync)(destBedroom);
        switch (file.fieldname) {
            case 'genImg':
                cb(null, destGenImg);
                break;
            case 'bedroom':
                cb(null, destBedroom);
        }
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
exports.uploadStaycationMedia = (0, multer_1.default)({ dest: '/uploads/staycation', storage: staycationGalleryStorage });
