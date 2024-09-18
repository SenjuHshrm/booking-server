"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let PaymentSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    clientId: { type: String, required: true }
}, {
    timestamps: true
});
const Payment = (0, mongoose_1.model)('payment', PaymentSchema);
exports.default = Payment;
