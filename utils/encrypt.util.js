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
exports.generateJWTSupportingDocsLink = exports.decrypt = exports.encrypt = void 0;
const config_1 = require("./../config");
const node_crypto_1 = __importDefault(require("node:crypto"));
const moment_1 = __importDefault(require("moment"));
const jwt = __importStar(require("jsonwebtoken"));
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
const generateJWTSupportingDocsLink = (currDate, user, staycation) => {
    let date = (0, moment_1.default)(currDate, 'MM/DD/YYYY').add(2, 'days').format('MM/DD/YYYY');
    let token = jwt.sign({ sub: user, staycationId: staycation, expiration: date }, config_1.env.JWT_SECRET, { expiresIn: '2d' });
    return `${config_1.env.HOST}/supporting-docs?token=${token}&user=${user}&staycation=${staycation}`;
};
exports.generateJWTSupportingDocsLink = generateJWTSupportingDocsLink;
