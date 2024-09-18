"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const config_1 = require("./../../../../config");
const auth_service_1 = __importDefault(require("../../auth.service"));
const postAuthRoutes = (0, express_1.Router)()
    .post('/login', config_1.csrf.doubleCsrfProtection, config_1.csrfErrorHandler, passport_1.default.authenticate('local', { session: false }), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let resp = yield auth_service_1.default.checkStatus(req.user, req.body.currentDate);
    if (resp === null)
        return res.status(500).json({ code: 'AUTH-0006' });
    if (!resp.res)
        return res.status(400).json({ msg: resp.msg });
    return auth_service_1.default.generateToken(res, req.user);
}))
    .post('/login/google', (req, res) => {
    return auth_service_1.default.googleLogin(res, req.body.authData, req.body.userData);
});
exports.default = postAuthRoutes;
