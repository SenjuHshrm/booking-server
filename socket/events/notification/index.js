"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const join_event_1 = __importDefault(require("./join.event"));
const disconnect_event_1 = __importDefault(require("./disconnect.event"));
// const NotificationEvent = { join, disconnect }
const NotificationEvent = (io) => {
    io.of('/notification').on('connection', (socket) => {
        (0, join_event_1.default)(socket);
        (0, disconnect_event_1.default)(socket);
    });
};
exports.default = NotificationEvent;
