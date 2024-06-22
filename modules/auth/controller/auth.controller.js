"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const delete_controller_1 = __importDefault(require("./requests/delete.controller"));
const get_controller_1 = __importDefault(require("./requests/get.controller"));
const post_controller_1 = __importDefault(require("./requests/post.controller"));
exports.authRoutes = (0, express_1.Router)()
    .use('/get', get_controller_1.default)
    .use('/post', post_controller_1.default)
    .use('/delete', delete_controller_1.default);
