"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let notificationSchema = new mongoose_1.Schema({
    from: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    to: { type: [mongoose_1.Types.ObjectId], ref: 'user' },
    type: { type: String, required: true },
    link: String,
    msg: { type: String, required: true },
    isRead: { type: Boolean, required: true, default: false }
}, {
    timestamps: true
});
const Notification = (0, mongoose_1.model)('notification', notificationSchema);
exports.default = Notification;
