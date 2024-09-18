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
const chat = (socket) => {
    let receiveChat = (data) => __awaiter(void 0, void 0, void 0, function* () {
        // let newMsg = new Message({ ...data });
        // let msg = newMsg
        //   .save()
        //   .then((m: IMessageSchema) => m.populate("from"))
        //   .then(m => m);
        // socket.to(data.roomId).emit("msg:chat:send", msg);
        new Message_schema_1.default(Object.assign({}, data))
            .save()
            .then((m) => m.populate("from"))
            .then(m => {
            socket.to(data.roomId).emit("msg:chat:send", m);
        });
    });
    socket.on("msg:chat:receive", receiveChat);
};
exports.default = chat;
