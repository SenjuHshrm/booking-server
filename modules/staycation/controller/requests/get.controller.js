"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const staycation_service_1 = __importDefault(require("../../staycation.service"));
const getStaycationRoutes = (0, express_1.Router)()
    .get('/list/:page/:limit', (req, res) => {
    let limit = parseInt(req.params.limit);
    let page = (parseInt(req.params.page) - 1) * limit;
    let isListed = req.query.listed === 'true';
    return staycation_service_1.default.getListings(res, page, limit, isListed);
})
    .get('/host-list/:userId/:page/:limit', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    let limit = parseInt(req.params.limit);
    let page = (parseInt(req.params.page) - 1) * limit;
    return staycation_service_1.default.getHostListing(res, req.params.userId, page, limit);
})
    .get('/details/:id', (req, res) => {
    return staycation_service_1.default.getDetails(res, req.params.id);
})
    .get('/gallery/:id', (req, res) => {
    return staycation_service_1.default.getGallery(res, req.params.id);
});
exports.default = getStaycationRoutes;
