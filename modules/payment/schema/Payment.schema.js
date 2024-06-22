"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const payment_interface_1 = require("../payment.interface");
let PaymentSchema = new mongoose_1.Schema({
    paymentType: { type: String, enum: { values: Object.keys(payment_interface_1.EPaymentType) } },
    userId: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    name: { type: String, required: true },
    bankName: { type: String, required: true },
    acctNum: String,
    cardNum: String,
    cvv: String
});
const Payment = (0, mongoose_1.model)('payment', PaymentSchema);
exports.default = Payment;
