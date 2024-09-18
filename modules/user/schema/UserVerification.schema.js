"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let userVerification = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    type: { type: String, required: true },
    idFront: { type: String, required: true },
    idBack: { type: String, required: true },
    status: { type: String, enum: { values: ['pending', 'approved', 'declined'] } },
    reason: String
});
const UserVerification = (0, mongoose_1.model)('user-verification', userVerification);
exports.default = UserVerification;
