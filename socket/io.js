"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("./events/main"));
const message_1 = __importDefault(require("./events/message"));
const notification_1 = __importDefault(require("./events/notification"));
const IO = (io) => {
    (0, main_1.default)(io);
    (0, message_1.default)(io);
    (0, notification_1.default)(io);
};
exports.default = IO;
