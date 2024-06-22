"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_service_1 = __importDefault(require("../../auth.service"));
const postAuthRoutes = (0, express_1.Router)()
    .post('/login', passport_1.default.authenticate('local', { session: false }), (req, res) => {
    return auth_service_1.default.generateToken(res, req.user);
});
exports.default = postAuthRoutes;
