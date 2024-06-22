"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const config_1 = require("./../config");
const node_crypto_1 = __importDefault(require("node:crypto"));
const keyBuffer = Buffer.from(config_1.env.ENCRYPT_KEY, 'base64');
const ivBuffer = Buffer.from(config_1.env.ENCRYPT_IV, 'base64');
const encrypt = (data) => {
    let cipher = node_crypto_1.default.createCipheriv(config_1.env.ENCRYPT_ALGORITHM, keyBuffer, ivBuffer);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};
exports.encrypt = encrypt;
const decrypt = (encrypted) => {
    let decipher = node_crypto_1.default.createDecipheriv(config_1.env.ENCRYPT_ALGORITHM, keyBuffer, ivBuffer);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};
exports.decrypt = decrypt;
