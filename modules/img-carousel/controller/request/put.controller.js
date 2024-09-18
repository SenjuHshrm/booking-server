"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("./../../../../middleware");
const img_carousel_service_1 = __importDefault(require("./../../../img-carousel/img-carousel.service"));
let mw = (req, res, next) => {
    if (req.params.type === 'front') {
        return middleware_1.uploadCarouselFrontImg.single('imgFile')(req, res, next);
    }
    return middleware_1.uploadCarouselLocImg.single('imgFile')(req, res, next);
};
const putImgCarouselRoutes = (0, express_1.Router)()
    .put('/update/:type/:id', mw, (req, res) => {
    if (req.params.type === 'front') {
        return img_carousel_service_1.default.updateImgFront(res, req.params.id, req.body);
    }
    return img_carousel_service_1.default.updateImgLoc(res, req.params.id, req.body);
});
exports.default = putImgCarouselRoutes;
