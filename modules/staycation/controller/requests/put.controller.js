"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const staycation_service_1 = __importDefault(require("../../staycation.service"));
const putStaycationRoutes = (0, express_1.Router)()
    .put('/update/:id', (req, res) => {
    return staycation_service_1.default.updateStaycation(res, req.params.id, req.body);
})
    .put('/update-from-admin/:id', (req, res) => {
    return staycation_service_1.default.updateStaycationFromAdmin(res, req.params.id, req.body);
})
    .put('/update-listing/:id', (req, res) => {
    return staycation_service_1.default.updateListing(res, req.params.id, req.body.isListed);
});
exports.default = putStaycationRoutes;
