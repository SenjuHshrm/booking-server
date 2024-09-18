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
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('report.controller', 'addReport', e.message, 'REP-0001');
        return res.status(500).json({ code: 'REP-0001' });
    }
});
let getReportList = (res, page, limit, name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let reports: IReportSchema[] = <IReportSchema[]>(await Report.find({}).populate('reporter', { path: "_id name" }).populate('reported', { path: '_id name' }).skip(page).limit(limit).exec())
        // return res.status(200).json(reports)
        let aggregate = [
            {
                $lookup: {
                    from: 'users',
                    localField: 'reporter',
                    foreignField: '_id',
                    as: 'reporterInfo'
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'reported',
                    foreignField: '_id',
                    as: 'reportedInfo'
                }
            }
        ];
        if (name !== undefined) {
            aggregate.push({
                $or: [
                    { $match: { 'reportedInfo.name.fName': { $regex: new RegExp(`${name}`), $options: 'imu' } } },
                    { $match: { 'reportedInfo.name.lName': { $regex: new RegExp(`${name}`), $options: 'imu' } } }
                ]
            });
        }
        aggregate.push({
            $project: {
                _id: 1,
                'reportedInfo.name.fName': 1,
                'reportedInfo.name.mName': 1,
                'reportedInfo.name.lName': 1,
                'reportedInfo.name.xName': 1,
                'reportedInfo.img': 1,
                'reportedInfo.id': 1,
                'reporterInfo.id': 1,
                'reporterInfo.img': 1,
                'reporterInfo.name.xName': 1,
                'reporterInfo.name.lName': 1,
                'reporter.name.mName': 1,
                'reporterInfo.name.fName': 1,
                createdAt: 1,
                updatedAt: 1,
                action: 1,
                msg: 1
            }
        }, {
            $facet: {
                paginatedResults: [{ $skip: page }, { $limit: limit }],
                totalCount: [{ $count: 'count' }]
            }
        });
        let reports = yield Report_schema_1.default.aggregate(aggregate).exec();
        return res.status(200).json(reports);
    }
    catch (e) {
        (0, utils_1.logger)('report.controller', 'getReportList', e.message, 'REP-0002');
        return res.status(500).json({ code: 'REP-0002' });
    }
});
let setReportAction = (res, id, action) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Report_schema_1.default.findByIdAndUpdate(id, { $set: { action } }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('report.controller', 'setReportAction', e.message, 'REP-0003');
        return res.status(500).json({ code: 'REP-0003' });
    }
});
const ReportService = {
    addReport,
    getReportList,
    setReportAction
};
exports.default = ReportService;
