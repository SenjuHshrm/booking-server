"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const dashboard_service_1 = __importDefault(require("./dashboard.service"));
const dashboardRoutes = (0, express_1.Router)()
    .get('/users', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    return dashboard_service_1.default.getAllUserCounts(res);
});
