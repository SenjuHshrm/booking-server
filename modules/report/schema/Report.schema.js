"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let ReportSchema = new mongoose_1.Schema({
    reporter: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    reported: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    msg: { type: String, required: true },
    action: { type: String, enum: { values: ['no-action', 'warning', 'suspend', 'terminate'] } }
}, {
    timestamps: true
});
const Report = (0, mongoose_1.model)('report', ReportSchema);
exports.default = Report;
