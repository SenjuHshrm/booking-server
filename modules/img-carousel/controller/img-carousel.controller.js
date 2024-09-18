"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_controller_1 = __importDefault(require("./request/get.controller"));
const post_controller_1 = __importDefault(require("./request/post.controller"));
const put_controller_1 = __importDefault(require("./request/put.controller"));
const delete_controller_1 = __importDefault(require("./request/delete.controller"));
const passport_1 = __importDefault(require("passport"));
const config_1 = require("./../../../config");
const imgCarouselRoutes = (0, express_1.Router)()
    .use('/get', get_controller_1.default)
    .use('/post', config_1.csrf.doubleCsrfProtection, config_1.csrfErrorHandler, passport_1.default.authenticate('jwt', { session: false }), post_controller_1.default)
    .use('/put', config_1.csrf.doubleCsrfProtection, config_1.csrfErrorHandler, passport_1.default.authenticate('jwt', { session: false }), put_controller_1.default)
    .use('/delete', config_1.csrf.doubleCsrfProtection, config_1.csrfErrorHandler, passport_1.default.authenticate('jwt', { session: false }), delete_controller_1.default);
exports.default = imgCarouselRoutes;
