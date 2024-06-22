"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let ReviewSchema = new mongoose_1.Schema({
    staycation: { type: mongoose_1.Types.ObjectId, ref: 'staycation' },
    user: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    rating: { type: Number, required: true },
    comment: String,
    media: [String]
});
const Review = (0, mongoose_1.model)('review', ReviewSchema);
exports.default = Review;
