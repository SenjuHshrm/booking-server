"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const faqs_service_1 = __importDefault(require("./../../faqs.service"));
const passport_1 = __importDefault(require("passport"));
const config_1 = require("./../../../../config");
const getFAQsRoutes = (0, express_1.Router)()
    .get('/list/:page/:limit', config_1.csrf.doubleCsrfProtection, config_1.csrfErrorHandler, passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    let limit = parseInt(req.params.limit);
    let page = (parseInt(req.params.page) - 1) * limit;
    return faqs_service_1.default.getFAQs(res, page, limit);
})
    .get('/list/active', (req, res) => {
    return faqs_service_1.default.getActiveFAQs(res);
});
exports.default = getFAQsRoutes;
