"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const staycation_service_1 = __importDefault(require("../../staycation.service"));
const middleware_1 = require("../../../../middleware");
const postStaycationRoutes = (0, express_1.Router)()
    .post('/apply', middleware_1.uploadStaycationMedia.array('img'), (req, res) => {
    let imgs = JSON.parse(req.body.imgDesc);
    let prices = Object.assign({}, JSON.parse(req.body.price));
    let staycation = {
        host: req.body.host,
        name: req.body.name,
        serverDirName: req.body.serverDirName,
        descriptionFilter: JSON.parse(req.body.descriptionFilter),
        descriptionText: req.body.description,
        placeType: req.body.placeType,
        // location: { ...JSON.parse(req.body.location) },
        // location: { type: '', coordinates: [] },
        address: Object.assign(Object.assign({}, JSON.parse(req.body.address)), { country: 'PH' }),
        details: req.body.details,
        media: {
            cover: '',
            imgs: [],
        },
        amenities: JSON.parse(req.body.amenities),
        reservationConfirmation: req.body.reservationConfirmation,
        welcomingGuest: req.body.welcomingGuest,
        price: { common: prices.price, beforeTax: prices.beforeTax },
        // discounts: [ ...JSON.parse(req.body.discounts) ],
        discounts: req.body.discounts,
        security: [...JSON.parse(req.body.security)],
    };
    let fileArrLn = imgs.length;
    for (let i = 0; i < fileArrLn; i++) {
        let dir = `/staycation/${req.body.serverDirName}/${imgs[i].filename}`;
        (imgs[i].desc === 'cover') ? staycation.media.cover = dir : staycation.media.imgs.push(dir);
    }
    return staycation_service_1.default.applyProprietorship(res, staycation);
});
exports.default = postStaycationRoutes;
