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
    descriptionFilter: { type: String, required: true },
    placeType: { type: String, required: true, enum: { values: Object.keys(staycation_interface_1.EPlaceType) } },
    maxBooking: { type: Number, required: true },
    address: {
        country: String,
        unit: String,
        street: String,
        brgy: { type: String, required: true },
        city: { type: String, required: true },
        province: { type: String, required: true },
        zip: { type: String, required: true }
    },
    landmark: String,
    location: mongoose_1.Schema.Types.Mixed,
    details: mongoose_1.Schema.Types.Mixed,
    amenities: [String],
    name: { type: String, required: true },
    descriptionText: { type: [String], required: true },
    detailedDescription: String,
    discounts: {
        discounts: String,
        value: Number
    },
    security: [String],
    price: { type: Number, required: true },
    cancellationPolicy: {
        cancellationPolicy: String,
        nonRefundable: String
    },
    houseRules: [String],
    houseRulesDetailed: String,
    bookingProcess: { type: String, required: true },
    genImgList: [String],
    cover: String,
    bedroomList: [String],
    isListed: { type: Boolean, default: false },
    isApproved: { type: Boolean, default: false }
    // host: { type: Types.ObjectId, ref: 'user' },
    // name: { type: String, required: true },
    // descriptionFilter: { type: [String], required: true },
    // descriptionText: { type: [String], required: true },
    // placeDescription: String,
    // placeType: { type: String, enum: { values: Object.keys(EPlaceType) } },
    // // location: {
    // //   type: String,
    // //   coordinates: []
    // // },
    // address: {
    //   country: { type: String, required: true },
    //   unit: String,
    //   street: { type: String, required: true },
    //   brgy: String,
    //   city: { type: String, required: true },
    //   province: { type: String, required: true },
    //   zip: { type: String, required: true }
    // },
    // landmark: String,
    // // bedrooms: [],
    // details: Schema.Types.Mixed,
    // amenities: [String],
    // media: {
    //   cover: { type: String, required: true },
    //   imgs: { type: [String], required: true }
    // },
    // reservationConfirmation: { type: String, enum: { values: Object.keys(EReservationConfirmation) } },
    // welcomingGuest: { type: String, enum: { values: Object.keys(EWelcomingGuest) } },
    // price: {
    //   common: { type: Number, required: true },
    //   beforeTax: { type: Number, required: true }
    // },
    // // discounts: [StaycationDiscountSchema],
    // discounts: String,
    // security: [String],
    // isListed: { type: Boolean, default: false },
    // isApproved: { type: Boolean, default: false }
}, {
    timestamps: true
});
const Staycation = (0, mongoose_1.model)('staycation', StaycationSchema);
exports.default = Staycation;
