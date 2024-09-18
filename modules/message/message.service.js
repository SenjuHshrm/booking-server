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
const utils_1 = require("./../../utils");
const Message_schema_1 = __importDefault(require("./schema/Message.schema"));
const MessageRoom_schema_1 = __importDefault(require("./schema/MessageRoom.schema"));
let saveMsg = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        new Message_schema_1.default(Object.assign({}, data)).save();
    }
    catch (e) {
        (0, utils_1.logger)("message.socket", "saveMsg", e.message, "MSG-0001");
    }
});
let getMsgRoom = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let rooms = (yield MessageRoom_schema_1.default.find({ members: id }).exec());
        let resp = rooms.map((room) => room.id);
        return resp;
    }
    catch (e) {
        (0, utils_1.logger)("message.socket", "getMsgRoom", e.message, "MSG-0002");
        throw e.message;
    }
});
let saveMsgAndCreateRoom = (res, receiverId, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newRoom = yield new MessageRoom_schema_1.default({
            members: [receiverId, data.from],
        }).save();
        data.roomId = newRoom.id;
        new Message_schema_1.default(Object.assign({}, data)).save();
        return res.status(201).json({ room: newRoom.id });
    }
    catch (e) {
        (0, utils_1.logger)("message.controller", "saveMsgAndCreateRoom", e.message, "MSG-0003");
        return res.status(500).json({ code: "MSG-0003" });
    }
});
let getMessageRooms = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let rooms = (yield MessageRoom_schema_1.default.find({ members: id })
            .populate({ path: "members", select: "_id name img" })
            .exec());
        let resp = Promise.all(rooms.map((room) => __awaiter(void 0, void 0, void 0, function* () {
            let m = (yield Message_schema_1.default.findOne({ roomId: room.id })
                .sort({ createdAt: -1 })
                .exec());
            return {
                _id: room.id,
                img: room.img,
                members: room.members,
                msgPrev: m.text || "",
                lastMsg: m ? m.createdAt : room.createdAt,
                from: m.from,
                createdAt: room.createdAt,
                updatedAt: room.updatedAt,
            };
        })));
        return res.status(200).json(yield resp);
    }
    catch (e) {
        (0, utils_1.logger)("message.controller", "getMessageRooms", e.message, "MSG-0004");
        return res.status(500).json({ code: "MSG-0004" });
    }
});
let getMessageThread = (res, roomId, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let msgs = yield Message_schema_1.default.find({
            roomId,
        })
            .populate({ path: "from", select: "_id name img" })
            .sort({ createdAt: -1 })
            .skip(page)
            .limit(limit)
            .exec();
        return res.status(200).json(msgs);
    }
    catch (e) {
        (0, utils_1.logger)("message.controller", "getMessageThread", e.message, "MSG-0005");
        return res.status(500).json({ code: "MSG-0005" });
    }
});
const MessageService = {
    saveMsg,
    getMsgRoom,
    saveMsgAndCreateRoom,
    getMessageRooms,
    getMessageThread,
};
exports.default = MessageService;
