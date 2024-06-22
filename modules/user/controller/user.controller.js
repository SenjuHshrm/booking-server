"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const get_controller_1 = __importDefault(require("./requests/get.controller"));
const post_controller_1 = __importDefault(require("./requests/post.controller"));
const put_controller_1 = __importDefault(require("./requests/put.controller"));
exports.userRoutes = (0, express_1.Router)()
    .use('/get', get_controller_1.default)
    .use('/post', post_controller_1.default)
    .use('/put', passport_1.default.authenticate('jwt', { session: false }), put_controller_1.default);
