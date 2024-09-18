"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_service_1 = __importDefault(require("./../../message.service"));
const postMessageRoutes = (0, express_1.Router)()
    .post('/send-msg/:receiverId', (req, res) => {
    return message_service_1.default.saveMsgAndCreateRoom(res, req.params.receiverId, req.body);
});
exports.default = postMessageRoutes;
