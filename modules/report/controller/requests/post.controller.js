"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const report_service_1 = __importDefault(require("./../../report.service"));
const postReportRoutes = (0, express_1.Router)()
    .post('/add', (req, res) => {
    return report_service_1.default.addReport(res, req.body);
});
exports.default = postReportRoutes;
