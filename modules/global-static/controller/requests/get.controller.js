"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const global_static_service_1 = __importDefault(require("../../global-static.service"));
const getGlobalStaticRoutes = (0, express_1.Router)()
    .get('/statics/:id', (req, res) => {
    return global_static_service_1.default.getStatic(res, req.params.id);
})
    .get('/statics/type/:type', (req, res) => {
    return global_static_service_1.default.getStaticByType(res, req.params.type);
});
exports.default = getGlobalStaticRoutes;
