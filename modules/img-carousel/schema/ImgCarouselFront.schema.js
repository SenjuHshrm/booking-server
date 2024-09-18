"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let imgCarFr = new mongoose_1.Schema({
    img: { type: String, required: true },
    isActive: { type: Boolean, required: true }
}, {
    timestamps: true
});
const ImageCarouselFront = (0, mongoose_1.model)('img-carousel-front', imgCarFr);
exports.default = ImageCarouselFront;
