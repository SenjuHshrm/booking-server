"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let trnHistory = new mongoose_1.Schema({
    clientKey: String,
    amount: Number,
    datePaid: String,
    checkoutURL: String
});
const transactionSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    staycationId: { type: mongoose_1.Types.ObjectId, ref: 'staycation' },
    total: Number,
    paymentType: { type: String, enum: { values: ['full', 'downpayment'] } },
    history: [trnHistory],
    status: { type: String, enum: { values: ['pending', 'paid'] } }
}, {
    timestamps: true
});
const Transaction = (0, mongoose_1.model)('transaction', transactionSchema);
exports.default = Transaction;
