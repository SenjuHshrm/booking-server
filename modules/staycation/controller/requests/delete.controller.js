"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const staycation_service_1 = __importDefault(require("../../staycation.service"));
const deleteStaycationRoutes = (0, express_1.Router)()
    .delete('/remove/:id', (req, res) => {
    return staycation_service_1.default.removeStaycation(res, req.params.id);
});
exports.default = deleteStaycationRoutes;
