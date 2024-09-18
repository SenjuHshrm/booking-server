"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRoutes = void 0;
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const post_controller_1 = __importDefault(require("./request/post.controller"));
const get_controller_1 = __importDefault(require("./request/get.controller"));
exports.messageRoutes = (0, express_1.Router)()
    // .use('/post', csrf.doubleCsrfProtection, csrfErrorHandler, passport.authenticate('jwt', { session: false }), postMessageRoutes)
    .use('/post', passport_1.default.authenticate('jwt', { session: false }), post_controller_1.default)
    .use('/get', passport_1.default.authenticate('jwt', { session: false }), get_controller_1.default);
