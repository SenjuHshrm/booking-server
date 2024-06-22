"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const staycation_interface_1 = require("../staycation.interface");
let StaycationDiscountSchema = new mongoose_1.Schema({
    percentage: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true }
});
let StaycationSchema = new mongoose_1.Schema({
    host: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    name: { type: String, required: true },
    descriptionFilter: { type: [String], required: true },
    descriptionText: { type: [String], required: true },
    placeType: { type: String, enum: { values: Object.keys(staycation_interface_1.EPlaceType) } },
    // location: {
    //   type: String,
    //   coordinates: []
    // },
    address: {
        country: { type: String, required: true },
        unit: String,
        street: { type: String, required: true },
        brgy: String,
        city: { type: String, required: true },
        province: { type: String, required: true },
        zip: { type: String, required: true }
    },
    details: mongoose_1.Schema.Types.Mixed,
    amenities: [String],
    media: {
        cover: { type: String, required: true },
        imgs: { type: [String], required: true }
    },
    reservationConfirmation: { type: String, enum: { values: Object.keys(staycation_interface_1.EReservationConfirmation) } },
    welcomingGuest: { type: String, enum: { values: Object.keys(staycation_interface_1.EWelcomingGuest) } },
    price: {
        common: { type: Number, required: true },
        beforeTax: { type: Number, required: true }
    },
    // discounts: [StaycationDiscountSchema],
    discounts: String,
    security: [String],
    isListed: { type: Boolean, default: false },
    isApproved: { type: Boolean, default: false }
}, {
    timestamps: true
});
const Staycation = (0, mongoose_1.model)('staycation', StaycationSchema);
exports.default = Staycation;
