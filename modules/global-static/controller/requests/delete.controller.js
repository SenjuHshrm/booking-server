"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const global_static_service_1 = __importDefault(require("../../global-static.service"));
const deleteGlobalStaticRoutes = (0, express_1.Router)()
    .put('/static/:id', (req, res) => {
    return global_static_service_1.default.deleteStatic(res, req.params.id);
});
exports.default = deleteGlobalStaticRoutes;
