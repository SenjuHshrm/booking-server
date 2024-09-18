"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_service_1 = __importDefault(require("../../auth.service"));
const putAuthRoutes = (0, express_1.Router)()
    // .put('/update-password/:id', csrf.doubleCsrfProtection, csrfErrorHandler, passport.authenticate('jwt', { session: false }), (req: Request, res: Response) => {
    .put('/update-password/:id', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    return auth_service_1.default.updatePassword(res, req.params.id, req.body.password);
});
exports.default = putAuthRoutes;
