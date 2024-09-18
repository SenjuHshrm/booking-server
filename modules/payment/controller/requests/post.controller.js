"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_service_1 = __importDefault(require("./../../payment.service"));
const passport_1 = __importDefault(require("passport"));
const config_1 = require("./../../../../config");
const postPaymentRoutes = (0, express_1.Router)()
    .post('/payment-process', (req, res) => {
    console.log(req.body.data);
    return res.sendStatus(200);
})
    .post('/create-payment-intent', config_1.csrf.doubleCsrfProtection, config_1.csrfErrorHandler, passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    return payment_service_1.default.createPaymentIntent(res, req.body, req.user);
})
    .post('/attach-to-payment-intent/:piId', config_1.csrf.doubleCsrfProtection, config_1.csrfErrorHandler, passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    return payment_service_1.default.attachToPaymentIntent(res, req.body, req.params.piId);
})
    .post('/save-pm-id', config_1.csrf.doubleCsrfProtection, config_1.csrfErrorHandler, passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    return payment_service_1.default.savePaymentMethodId(res, req.body);
});
exports.default = postPaymentRoutes;
