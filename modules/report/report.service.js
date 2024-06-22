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
const Report_schema_1 = __importDefault(require("./schema/Report.schema"));
const utils_1 = require("./../../utils");
let addReport = (res, rep) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield new Report_schema_1.default(Object.assign({}, rep)).save();
        return res.sendStatus(201);
    }
    catch (e) {
        (0, utils_1.logger)('report.controller', 'addReport', e.message, 'REP-0001');
        return res.status(500).json({ code: 'REP-0001' });
    }
});
let getReportList = (res, page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let reports = (yield Report_schema_1.default.find({}).populate('reporter', { path: "_id name" }).populate('reported', { path: '_id name' }).skip(page).limit(limit).exec());
        return res.status(200).json(reports);
    }
    catch (e) {
        (0, utils_1.logger)('report.controller', 'getReportList', e.message, 'REP-0002');
        return res.status(500).json({ code: 'REP-0002' });
    }
});
let getReportCount = (res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let count = (yield Report_schema_1.default.countDocuments().exec());
        return res.status(200).json({ count });
    }
    catch (e) {
        (0, utils_1.logger)('report.controller', 'getReportCount', e.message, 'REP-0003');
        return res.status(500).json({ code: 'REP-0003' });
    }
});
const ReportService = {
    addReport,
    getReportList,
    getReportCount
};
exports.default = ReportService;
