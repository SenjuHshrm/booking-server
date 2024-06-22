"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const user_service_1 = __importDefault(require("./../../user.service"));
const getUserRoutes = (0, express_1.Router)()
    .get('/users/:access/:page/:limit', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    let limit = parseInt(req.params.limit);
    let page = (parseInt(req.params.page) - 1) * limit;
    return user_service_1.default.getUsersByAccess(res, req.params.access, page, limit);
})
    .get('/proprietor-application/:page/:limit', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    let limit = parseInt(req.params.limit);
    let page = (parseInt(req.params.page) - 1) * limit;
    return user_service_1.default.getProprietorApplications(res, page, limit);
})
    .get('/profile/:id', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    return user_service_1.default.getUserProfile(res, req.params.id);
})
    .get('/wishlist/:id', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    return user_service_1.default.getWishlistByUser(res, req.params.id);
});
exports.default = getUserRoutes;
