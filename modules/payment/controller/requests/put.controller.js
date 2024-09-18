"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_service_1 = __importDefault(require("./../../payment.service"));
const putPaymentRoutes = (0, express_1.Router)()
    .put('/set-as-default/:userId/:pmId', (req, res) => {
    return payment_service_1.default.setAsDefaultPaymentMethod(res, req.params.userId, req.params.pmId);
});
exports.default = putPaymentRoutes;
