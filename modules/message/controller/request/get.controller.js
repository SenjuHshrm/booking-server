"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_service_1 = __importDefault(require("./../../message.service"));
const getMessageRoutes = (0, express_1.Router)()
    .get('/rooms/:id', (req, res) => {
    return message_service_1.default.getMessageRooms(res, req.params.id);
})
    .get('/message-thread/:roomId/:page/:limit', (req, res) => {
    let limit = parseInt(req.params.limit);
    let page = (parseInt(req.params.page) - 1) * limit;
    return message_service_1.default.getMessageThread(res, req.params.roomId, page, limit);
});
exports.default = getMessageRoutes;
