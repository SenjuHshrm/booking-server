"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let msgSchema = new mongoose_1.Schema({
    roomId: { type: mongoose_1.Types.ObjectId, ref: 'msg-room' },
    from: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    type: { type: String, enum: { values: ['text', 'media'] } },
    text: String,
    media: mongoose_1.Schema.Types.Mixed,
    isRead: { type: Boolean, default: false }
}, {
    timestamps: true
});
const Message = (0, mongoose_1.model)('message', msgSchema);
exports.default = Message;
