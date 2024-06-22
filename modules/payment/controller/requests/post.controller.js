"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_service_1 = __importDefault(require("./../../payment.service"));
const utils_1 = require("./../../../../utils");
const postPaymentRoutes = (0, express_1.Router)()
    .post('/add', (req, res) => {
    let paymentEncrypted = Object.assign(Object.assign({}, req.body), { acctNum: (req.body.acctNum) ? (0, utils_1.encrypt)(req.body.acctNum) : '', cardNum: (req.body.cardNum) ? (0, utils_1.encrypt)(req.body.cardNum) : '', cvv: (req.body.cvv) ? (0, utils_1.encrypt)(req.body.cvv) : '' });
    return payment_service_1.default.addPayment(res, paymentEncrypted);
});
exports.default = postPaymentRoutes;
