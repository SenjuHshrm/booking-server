"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let msgRoomSchema = new mongoose_1.Schema({
    members: { type: [mongoose_1.Types.ObjectId], ref: 'user' },
    img: String
}, {
    timestamps: true
});
const MessageRoom = (0, mongoose_1.model)('msg-room', msgRoomSchema);
exports.default = MessageRoom;
