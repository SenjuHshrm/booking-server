"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_service_1 = __importDefault(require("../../payment.service"));
const getPaymentRoutes = (0, express_1.Router)()
    .get('/list/:id', (req, res) => {
    return payment_service_1.default.getPaymentList(res, req.params.id);
})
    .get('/details/:id', (req, res) => {
    return payment_service_1.default.getPaymentDetails(res, req.params.id);
});
exports.default = getPaymentRoutes;
