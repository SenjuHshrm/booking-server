"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalAccessToken = void 0;
const mongoose_1 = require("mongoose");
let PersonalAccessTokenSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    device: String
}, {
    timestamps: true
});
exports.PersonalAccessToken = (0, mongoose_1.model)('access-token', PersonalAccessTokenSchema);
