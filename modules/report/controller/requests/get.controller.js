"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const report_service_1 = __importDefault(require("./../../report.service"));
const getReportRoutes = (0, express_1.Router)()
    .get('/list/:page/:limit', (req, res) => {
    let limit = parseInt(req.params.limit);
    let page = (parseInt(req.params.page) - 1) * limit;
    return report_service_1.default.getReportList(res, page, limit, req.query.name);
});
exports.default = getReportRoutes;
