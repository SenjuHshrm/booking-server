"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middleware_1 = require("./../../../../middleware");
const express_1 = require("express");
const user_service_1 = __importDefault(require("../../user.service"));
const passport_1 = __importDefault(require("passport"));
const postUserRoutes = (0, express_1.Router)()
    .post('/add', (req, res) => {
    return user_service_1.default.register(res, req.body);
})
    .post('/add/admin', passport_1.default.authenticate('jwt', { session: false }), middleware_1.profileImgStorageMedia.single('img'), (req, res) => {
    var _a;
    let user = {
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        password: req.body.password,
        imgFile: `/profile-img/${req.body.email}/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname}`
    };
    return user_service_1.default.addAdmin(res, user);
});
exports.default = postUserRoutes;
