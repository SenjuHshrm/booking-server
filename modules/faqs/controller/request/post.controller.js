"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const faqs_service_1 = __importDefault(require("./../../faqs.service"));
const postFAQsRoutes = (0, express_1.Router)()
    .post('/add', (req, res) => {
    return faqs_service_1.default.addFAQ(res, req.body);
});
exports.default = postFAQsRoutes;
