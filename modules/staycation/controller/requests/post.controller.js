"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const staycation_service_1 = __importDefault(require("../../staycation.service"));
const middleware_1 = require("../../../../middleware");
const postStaycationRoutes = (0, express_1.Router)()
    .post('/apply', middleware_1.uploadStaycationMedia.fields([{ name: 'genImg' }, { name: 'bedroom' }]), (req, res) => {
    let discount = JSON.parse(req.body.discounts);
    let genImg = JSON.parse(req.body.genImgList);
    let bedroom = JSON.parse(req.body.bedroomList);
    let staycation = {
        host: req.body.host,
        descriptionFilter: req.body.descriptionFilter,
        placeType: req.body.placeType,
        maxBooking: parseInt(req.body.maxBooking),
        address: Object.assign(Object.assign({}, JSON.parse(req.body.address)), { country: 'PH' }),
        landmark: req.body.landmark,
        location: '',
        details: JSON.parse(req.body.details),
        amenities: JSON.parse(req.body.amenities),
        name: req.body.name,
        descriptionText: JSON.parse(req.body.descriptionText),
        detailedDescription: req.body.detailedDescription,
        discounts: {
            discounts: discount.discounts,
            value: parseInt(discount.value)
        },
        security: JSON.parse(req.body.security),
        price: parseInt(req.body.price),
        cancellationPolicy: JSON.parse(req.body.cancellationPolicy),
        houseRules: JSON.parse(req.body.houseRules),
        houseRulesDetailed: req.body.houseRulesDetailed,
        bookingProcess: req.body.bookingProcess,
        genImgList: genImg.map((gi) => `/staycation/${req.body.serverDirName}/gen-img/${gi}`),
        cover: '',
        bedroomList: bedroom.map((br) => `/staycation/${req.body.serverDirName}/bedroom/${br}`),
        isListed: false,
        isApproved: false
    };
    return staycation_service_1.default.applyProprietorship(res, staycation);
})
    .post('/review-staycation/:staycationId', middleware_1.uploadReviewMedia.array('media'), (req, res) => {
    let media = [];
    let imgs = req.files;
    for (let i = 0; i < imgs.length; i++) {
        media.push(`/staycation/${req.body.serverDirName}/reviews/${imgs[i].originalname}`);
    }
    let data = {
        staycation: req.params.staycationId,
        user: req.body.user,
        rating: parseInt(req.body.rating),
        comment: req.body.comment,
        media
    };
    return staycation_service_1.default.reviewStaycation(res, data);
});
exports.default = postStaycationRoutes;
