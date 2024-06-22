"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_service_1 = __importDefault(require("../../auth.service"));
const deleteAuthRoutes = (0, express_1.Router)()
    .delete('/logout', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    var _a;
    let token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    return auth_service_1.default.logout(res, req.user, token);
});
exports.default = deleteAuthRoutes;
