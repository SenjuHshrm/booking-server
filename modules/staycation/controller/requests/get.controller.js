"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const staycation_service_1 = __importDefault(require("../../staycation.service"));
const token_payload_1 = require("../../../../utils/token-payload");
const validate_pagination_1 = __importDefault(require("../../../../utils/validate-pagination"));
const getStaycationRoutes = (0, express_1.Router)()
    .get("/list/:page/:limit", (req, res) => {
    let limit = parseInt(req.params.limit);
    let page = (parseInt(req.params.page) - 1) * limit;
    let query = {
        isListed: req.query.listed === "true",
        placeType: req.query.placeType,
        descriptionFilter: req.query.descriptionFilter,
    };
    console.log(req.query.placeType);
    return staycation_service_1.default.getListings(res, page, limit, query);
})
    .get("/host-list/:userId/:page/:limit", passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    let limit = parseInt(req.params.limit);
    let page = (parseInt(req.params.page) - 1) * limit;
    return staycation_service_1.default.getHostListing(res, req.params.userId, page, limit);
})
    .get("/details/:id", (req, res) => {
    return staycation_service_1.default.getDetails(res, req.params.id);
})
    .get("/gallery/:id", (req, res) => {
    return staycation_service_1.default.getGallery(res, req.params.id);
})
    .get("/recent-search/:id", passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    return staycation_service_1.default.getRecentSearches(res, req.params.id);
})
    .get("/all/:page/:limit", passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    let limit = parseInt(req.params.limit);
    let page = (parseInt(req.params.page) - 1) * limit;
    return staycation_service_1.default.getAllStaycations(res, page, limit, req.query.name);
})
    .get("/average-rating/:staycationId", (req, res) => {
    return staycation_service_1.default.averageRatingPerStaycation(res, req.params.staycationId);
})
    .get("/did-checkout/:staycationId", passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    var _a;
    const authId = (_a = (0, token_payload_1.getToken)(req)) === null || _a === void 0 ? void 0 : _a.sub;
    const staycationId = req.params.staycationId;
    return staycation_service_1.default.checkDidCheckout(res, authId, staycationId);
})
    .get("/reviews/:staycationId/:page/:limit", (req, res) => {
    const { limit, offset } = (0, validate_pagination_1.default)(req.params.limit, req.params.page);
    return staycation_service_1.default.listReviewsByStaycation(res, req.params.staycationId, offset, limit);
});
exports.default = getStaycationRoutes;
