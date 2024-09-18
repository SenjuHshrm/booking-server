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
const Auth_schema_1 = __importDefault(require("./../auth/schema/Auth.schema"));
const Staycation_schema_1 = __importDefault(require("./../staycation/schema/Staycation.schema"));
let getAllUserCounts = (res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let all = yield Auth_schema_1.default.countDocuments({ role: { $ne: 'admin' } }).exec();
        let prop = yield Auth_schema_1.default.countDocuments({ role: 'host' }).exec();
        let guest = yield Auth_schema_1.default.countDocuments({ role: { $and: [{ $eq: 'customer' }, { $ne: 'host' }] } }).exec();
        let listing = yield Staycation_schema_1.default.countDocuments({ isListed: true }).exec();
        return res.status(200).json({ all, prop, guest, listing });
    }
    catch (e) {
        (0, utils_1.logger)('dashboard.controller', 'getAllUserCounts', e.message, 'DSB-0001');
        return res.status(500).json({ code: 'DSB-0001' });
    }
});
const DashboardService = {
    getAllUserCounts
};
exports.default = DashboardService;
