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
const message_service_1 = __importDefault(require("./../../../modules/message/message.service"));
const config_1 = require("./../../../config");
const join = (socket) => {
    let mainJoin = (id) => __awaiter(void 0, void 0, void 0, function* () {
        // socket.data.userId = id
        let idKey = `${id}:msg`;
        config_1.redisClient.rPush(idKey, socket.id);
        let roomIds = yield message_service_1.default.getMsgRoom(id);
        if (roomIds.length > 0) {
            socket.join(roomIds);
        }
        console.log(`User ${id} joined msg`);
    });
    socket.on('msg:join', mainJoin);
};
exports.default = join;
