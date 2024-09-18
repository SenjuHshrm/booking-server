"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Message_schema_1 = __importDefault(require("./../../../modules/message/schema/Message.schema"));
const read = (socket) => {
    let receiveChat = (msgId, roomId) => __awaiter(void 0, void 0, void 0, function* () {
        yield Message_schema_1.default.findByIdAndUpdate(msgId, { $set: { isRead: true } }).exec();
        socket.to(roomId).emit('msg:chat:msg-read', { roomId, msgId });
    });
    socket.on('msg:chat:read', receiveChat);
};
exports.default = read;
