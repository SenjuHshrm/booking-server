"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_service_1 = __importDefault(require("../../auth.service"));
const passport_1 = __importDefault(require("passport"));
const getAuthRoutes = (0, express_1.Router)()
    .get('/request-token', (req, res) => {
    var _a;
    let token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    return auth_service_1.default.requestToken(res, token);
})
    .get('/check-user', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    return res.status(200).json({ isAuth: true });
});
exports.default = getAuthRoutes;
