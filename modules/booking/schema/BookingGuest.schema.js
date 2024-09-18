"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let bookingGuest = new mongoose_1.Schema({
    booking: { type: mongoose_1.Types.ObjectId, ref: 'booking' },
    name: { type: String, required: true },
    checkInDate: String,
    checkInTime: String,
    checkOutDate: String,
    checkOutTime: String
});
const BookingGuest = (0, mongoose_1.model)('booking-guest', bookingGuest);
exports.default = BookingGuest;
