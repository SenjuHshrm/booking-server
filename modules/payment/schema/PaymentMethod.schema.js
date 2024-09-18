"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let pmSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    pmId: { type: String, required: true },
    isDefault: { type: Boolean, required: true },
}, {
    timestamps: true
});
const PaymentMethod = (0, mongoose_1.model)('payment-method', pmSchema);
exports.default = PaymentMethod;
