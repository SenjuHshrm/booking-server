"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let bookingPaymentSchema = new mongoose_1.Schema({
    price: Number,
    paymentDate: String,
    ref: String,
});
let bookingSchema = new mongoose_1.Schema({
    initiatedBy: { type: mongoose_1.Types.ObjectId, ref: "user" },
    bookTo: { type: mongoose_1.Types.ObjectId, ref: "staycation" },
    duration: {
        start: String,
        end: String,
    },
    transaction: { type: mongoose_1.Types.ObjectId, ref: "transaction" },
    details: { type: mongoose_1.Schema.Types.Mixed },
    isCancelled: { type: Boolean, required: true },
    cancellationPolicy: String,
    status: {
        type: String,
        enum: {
            values: [
                "for_approval",
                "upcoming",
                "arriving",
                "current_guest",
                "check_out",
                "cancelled",
                "declined",
            ],
        },
    },
    checkInDate: String,
    checkInTime: String,
    checkOutDate: String,
    checkOutTime: String,
}, {
    timestamps: true,
});
const Booking = (0, mongoose_1.model)("booking", bookingSchema);
exports.default = Booking;
