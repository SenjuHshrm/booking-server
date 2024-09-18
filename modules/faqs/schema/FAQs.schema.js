"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let faqsSchema = new mongoose_1.Schema({
    addedBy: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    isActive: { type: Boolean, default: false }
});
const FAQs = (0, mongoose_1.model)('faq', faqsSchema);
exports.default = FAQs;
