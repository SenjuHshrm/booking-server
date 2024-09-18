"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const report_service_1 = __importDefault(require("./../../report.service"));
const putReportRoutes = (0, express_1.Router)()
    .put('/set-action/:id', (req, res) => {
    return report_service_1.default.setReportAction(res, req.params.id, req.body.action);
});
exports.default = putReportRoutes;
