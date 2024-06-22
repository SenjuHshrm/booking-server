"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const fs_1 = require("fs");
const moment_1 = __importDefault(require("moment"));
const path_1 = require("path");
let logFolder = (0, path_1.resolve)(__dirname, '../logs');
let logfile = `${logFolder}/${(0, moment_1.default)(new Date()).format('MM-DD-YYYY')}.txt`;
const logger = (controller, fnName, desc, code) => {
    try {
        if (!(0, fs_1.existsSync)(logfile))
            (0, fs_1.writeFileSync)(logfile, `Request Logs\nDate: ${(0, moment_1.default)(new Date()).format('MM-DD-YYYY')}\n\n`);
        let info = (code === undefined) ? desc : `${code} - ${desc}`;
        let logtxt = `${(0, moment_1.default)(new Date()).format('MM-DD-YYYY hh:mm:ss A')}\nController: ${controller} -> ${fnName}\nCode: ${code}\nInfo: ${info}\n\n`;
        (0, fs_1.appendFileSync)(logfile, logtxt);
    }
    catch (e) {
        console.log(e);
    }
};
exports.logger = logger;
