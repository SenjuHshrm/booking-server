"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let bookCancelSchema = new mongoose_1.Schema({
    booking: { type: mongoose_1.Types.ObjectId, ref: 'booking' },
    reason: String,
    status: { type: String, enum: { values: ['pending', 'cancelled'] } }
}, {
    timestamps: true
});
const BookingCancellation = (0, mongoose_1.model)('booking-cancellation', bookCancelSchema);
exports.default = BookingCancellation;
