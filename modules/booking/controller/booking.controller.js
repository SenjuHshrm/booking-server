"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = __importDefault(require("./request/post.controller"));
const get_controller_1 = __importDefault(require("./request/get.controller"));
const passport_1 = __importDefault(require("passport"));
const config_1 = require("./../../../config");
const bookingRoutes = (0, express_1.Router)()
    .use("/post", config_1.csrf.doubleCsrfProtection, config_1.csrfErrorHandler, passport_1.default.authenticate('jwt', { session: false }), post_controller_1.default)
    .use("/get", passport_1.default.authenticate('jwt', { session: false }), get_controller_1.default);
exports.default = bookingRoutes;
