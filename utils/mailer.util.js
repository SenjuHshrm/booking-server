"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPassword = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const logger_util_1 = require("./logger.util");
const config_1 = require("./../config");
const fs_1 = require("fs");
const handlebars_1 = __importDefault(require("handlebars"));
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: config_1.env.SU_EMAIL,
        pass: config_1.env.SU_PASSWORD_APP
    }
});
const sendPassword = (email, passwordText) => {
    try {
        let file = (0, fs_1.readFileSync)(`${global.appRoot}/views/password.html`, { encoding: 'utf-8' });
        let template = handlebars_1.default.compile(file);
        let replacements = {
            email,
            password: passwordText
        };
        let html = template(replacements);
        let msg = {
            from: config_1.env.SU_EMAIL,
            to: email,
            subject: 'TaraGo Account Verification',
            html
        };
        transporter.sendMail(msg);
    }
    catch (e) {
        (0, logger_util_1.logger)('mailer.util', 'sendPassword', e.message, 'MLR-0001');
    }
};
exports.sendPassword = sendPassword;
