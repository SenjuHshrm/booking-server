"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let propAppSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    status: { type: String, enum: { values: ['pending', 'approved', 'declined'] } },
    documents: { type: mongoose_1.Schema.Types.Mixed },
    listings: { type: [mongoose_1.Types.ObjectId], ref: 'staycation' }
}, {
    timestamps: true
});
const ProprietorApplication = (0, mongoose_1.model)('proprietor-application', propAppSchema);
exports.default = ProprietorApplication;
