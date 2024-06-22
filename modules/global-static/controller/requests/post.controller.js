"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const global_static_service_1 = __importDefault(require("../../global-static.service"));
const postGlobalStaticRoutes = (0, express_1.Router)()
    .post('/add-static', (req, res) => {
    return global_static_service_1.default.addStatic(res, req.body.type, req.body.values);
});
exports.default = postGlobalStaticRoutes;
