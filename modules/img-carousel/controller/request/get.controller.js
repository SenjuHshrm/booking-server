"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const img_carousel_service_1 = __importDefault(require("./../../../img-carousel/img-carousel.service"));
const passport_1 = __importDefault(require("passport"));
const getImgCarouselRoutes = (0, express_1.Router)()
    .get('/list-all/:type/:page/:limit', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    let limit = parseInt(req.params.limit);
    let page = (parseInt(req.params.page) - 1) * limit;
    if (req.params.type === 'front') {
        return img_carousel_service_1.default.getImgFront(res, page, limit);
    }
    return img_carousel_service_1.default.getImgLoc(res, page, limit);
})
    .get('/list-active/:type', (req, res) => {
    if (req.params.type === 'front') {
        return img_carousel_service_1.default.getActiveImgFront(res);
    }
    return img_carousel_service_1.default.getActiveImgLoc(res);
});
exports.default = getImgCarouselRoutes;
