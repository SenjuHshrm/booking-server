"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const getToken = (req) => {
    const authorization = req.headers["authorization"];
    const token = authorization === null || authorization === void 0 ? void 0 : authorization.split(" ").pop();
    return token ? jsonwebtoken_1.default.decode(token) : null;
};
exports.getToken = getToken;
