"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let imgCarLoc = new mongoose_1.Schema({
    img: { type: String, required: true },
    desc: { type: String, required: true },
    isActive: { type: Boolean, required: true }
}, {
    timestamps: true
});
const ImageCarouselLocation = (0, mongoose_1.model)('img-carousel-location', imgCarLoc);
exports.default = ImageCarouselLocation;
