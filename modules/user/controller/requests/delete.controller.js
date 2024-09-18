"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const user_service_1 = __importDefault(require("./../../user.service"));
const deleteUserRoutes = (0, express_1.Router)()
    .delete('/remove-to-wishlist/:user/:staycation', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    return user_service_1.default.removeToWishlist(res, req.params.user, req.params.staycation);
});
exports.default = deleteUserRoutes;
