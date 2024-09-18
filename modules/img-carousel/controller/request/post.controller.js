"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middleware_1 = require("./../../../../middleware");
const express_1 = require("express");
const img_carousel_service_1 = __importDefault(require("./../../../img-carousel/img-carousel.service"));
let mw = (req, res, next) => {
    if (req.params.type === 'front') {
        return middleware_1.uploadCarouselFrontImg.single('imgFile')(req, res, next);
    }
    return middleware_1.uploadCarouselLocImg.single('imgFile')(req, res, next);
};
const postImgCarouselRoutes = (0, express_1.Router)()
    .post('/add/:type', mw, (req, res) => {
    let data;
    if (req.params.type === 'front') {
        data = {
            img: `homepage/carousel-front/${req.body.img}`,
            isActive: req.body.isActive
        };
        return img_carousel_service_1.default.addImgFront(res, data);
    }
    data = {
        img: `homepage/carousel-location/${req.body.img}`,
        desc: req.body.desc,
        isActive: req.body.isActive
    };
    return img_carousel_service_1.default.addImgLoc(res, data);
});
exports.default = postImgCarouselRoutes;
