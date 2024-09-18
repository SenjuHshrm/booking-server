"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("./../../../config");
let AuthSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    email: { type: String, unique: true, required: true },
    password: { type: String },
    google: mongoose_1.Schema.Types.Mixed,
    access: { type: [String], required: true }
}, {
    timestamps: true
});
AuthSchema.methods.generateHash = function (password) {
    this.password = bcryptjs_1.default.hashSync(password, 12);
};
AuthSchema.methods.compareHash = function (password) {
    return bcryptjs_1.default.compareSync(password, this.password);
};
AuthSchema.methods.generateToken = function (img) {
    return {
        access: jwt.sign({ sub: this.userId, access: this.access, img }, config_1.env.JWT_SECRET, { expiresIn: '5m' }),
        refresh: jwt.sign({ sub: this.userId, email: this.email }, config_1.env.JWT_SECRET, { expiresIn: '1w' })
    };
};
const Auth = (0, mongoose_1.model)('auth', AuthSchema);
exports.default = Auth;
