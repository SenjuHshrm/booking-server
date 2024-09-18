"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let notifCount = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    notif: { type: Number, default: 0 },
    msg: { type: Number, default: 0 }
});
const NotificationCount = (0, mongoose_1.model)('notif-count', notifCount);
exports.default = NotificationCount;
