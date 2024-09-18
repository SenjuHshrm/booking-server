"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const faqs_service_1 = __importDefault(require("./../../faqs.service"));
const putFAQsRoutes = (0, express_1.Router)()
    .put('/update/:id', (req, res) => {
    return faqs_service_1.default.updateFAQ(res, req.params.id, req.body);
});
exports.default = putFAQsRoutes;
