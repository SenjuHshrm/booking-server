"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.env = {
    HOST: process.env.HOST,
    DOMAIN_NAME: process.env.DOMAIN_NAME,
    NODE_ENV: process.env.NODE_ENV,
    ORIGIN: (_a = process.env.ORIGIN) === null || _a === void 0 ? void 0 : _a.split(' '),
    JWT_SECRET: process.env.JWT_SECRET,
    MONGODB_NAME: process.env.MONGODB_NAME,
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_USER: process.env.MONGODB_USER,
    MONGODB_PASS: process.env.MONGODB_PASS,
    REDIS_URL: process.env.REDIS_URL,
    SU_EMAIL: process.env.SU_EMAIL,
    SU_PASSWORD_APP: process.env.SU_PASSWORD_APP,
    SIO_ADMIN_USERNAME: process.env.SIO_ADMIN_USERNAME,
    SIO_ADMIN_PASSWORD: process.env.SIO_ADMIN_PASSWORD,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASS: process.env.ADMIN_PASS,
    ADMIN_FIRSTNAME: process.env.ADMIN_FIRSTNAME,
    ADMIN_MIDDLENAME: process.env.ADMIN_MIDDLENAME,
    ADMIN_LASTNAME: process.env.ADMIN_LASTNAME,
    ADMIN_EXTNAME: process.env.ADMIN_EXTNAME,
    ADMIN_IMG: process.env.ADMIN_IMG,
    ADMIN_ADDRESS: process.env.ADMIN_ADDRESS,
    ENCRYPT_ALGORITHM: process.env.ENCRYPT_ALGORITHM,
    ENCRYPT_KEY: process.env.ENCRYPT_KEY,
    ENCRYPT_IV: process.env.ENCRYPT_IV,
    PAYMONGO_PK: process.env.PAYMONGO_PK,
    PAYMONGO_SK: process.env.PAYMONGO_SK,
    PAYMONGO_URL: process.env.PAYMONGO_URL,
    PAYMONGO_URL_VER: process.env.PAYMONGO_URL_VER,
    PAYMONGO_PAYMENT_METHODS: JSON.parse(process.env.PAYMONGO_PAYMENT_METHODS),
    CSRF_SECRET: process.env.CSRF_SECRET,
    COOKIE_SECRET: process.env.COOKIE_SECRET,
    CSRF_COOKIE_NAME: process.env.CSRF_COOKIE_NAME,
    CSRF_HEADER_NAME: process.env.CSRF_HEADER_NAME
};
