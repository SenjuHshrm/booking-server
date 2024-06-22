"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const express_1 = require("express");
const post_controller_1 = __importDefault(require("./requests/post.controller"));
const get_controller_1 = __importDefault(require("./requests/get.controller"));
const put_controller_1 = __importDefault(require("./requests/put.controller"));
const delete_controller_1 = __importDefault(require("./requests/delete.controller"));
exports.paymentRoutes = (0, express_1.Router)()
    .use('/post', /**passport.authenticate('jwt', { session: false }),*/ post_controller_1.default)
    .use('/get', /**passport.authenticate('jwt', { session: false }) */ get_controller_1.default)
    .use('/put', /**passport.authenticate('jwt', { session: false }) */ put_controller_1.default)
    .use('/delete', /**passport.authenticate('jwt', { session: false }) */ delete_controller_1.default);
