"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const img_carousel_service_1 = __importDefault(require("./../../../img-carousel/img-carousel.service"));
const deleteImgCarouselRoutes = (0, express_1.Router)()
    .delete('/:type/:id', (req, res) => {
    if (req.params.type === 'front') {
        return img_carousel_service_1.default.deleteImgFront(res, req.params.id);
    }
    return img_carousel_service_1.default.deleteImgLoc(res, req.params.id);
});
exports.default = deleteImgCarouselRoutes;
