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
const Notification_schema_1 = __importDefault(require("./schema/Notification.schema"));
const utils_1 = require("./../../utils");
const NotificationCount_schema_1 = __importDefault(require("./schema/NotificationCount.schema"));
let addNotification = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newNotif = new Notification_schema_1.default(Object.assign({}, data)).save();
        return yield newNotif;
    }
    catch (e) {
        (0, utils_1.logger)('notification', 'addNotification', e.message, 'NTF-0001');
    }
});
let markAsRead = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Notification_schema_1.default.findByIdAndUpdate(id, { $set: { isRead: true } }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('notification.controller', 'markAsRead', e.message, 'NTF-0002');
        return res.status(500).json({ code: 'NTF-0002' });
    }
});
let getNotification = (res, userId, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let notifs = (yield Notification_schema_1.default.find({ to: userId }).populate({ path: 'from', select: '_id name img' }).skip(page).limit(limit).sort({ createdAt: -1 }).exec());
        return res.status(200).json(notifs);
    }
    catch (e) {
        (0, utils_1.logger)('notification.controller', 'getNotification', e.message, 'NTF-0003');
        return res.status(500).json({ code: 'NTF-0003' });
    }
});
let deleteNotification = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Notification_schema_1.default.findByIdAndDelete(id).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('notification.controller', 'deleteNotification', e.message, 'NTF-0004');
        return res.status(500).json({ code: 'NTF-0004' });
    }
});
let incrementNotifCount = (user, field) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield NotificationCount_schema_1.default.findOneAndUpdate({ user }, { $inc: { [field]: 1 } }).exec();
    }
    catch (e) {
        (0, utils_1.logger)('notification.controller', 'incrementNotifCount', e.message, 'NTF-0005');
    }
});
let resetNotifCount = (user, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield NotificationCount_schema_1.default.findOneAndUpdate({ user }, { $set: Object.assign({}, data) }).exec();
    }
    catch (e) {
        (0, utils_1.logger)('notification.controller', 'incrementNotifCount', e.message, 'NTF-0005');
    }
});
const NotificationService = {
    addNotification,
    markAsRead,
    getNotification,
    deleteNotification,
    incrementNotifCount,
    resetNotifCount
};
exports.default = NotificationService;
