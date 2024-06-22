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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("./../../config");
const PersonalAccessToken_schema_1 = require("./schema/PersonalAccessToken.schema");
const Auth_schema_1 = __importDefault(require("./schema/Auth.schema"));
const utils_1 = require("./../../utils");
let generateToken = (res, a) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let auth = a;
        let token = auth.generateToken();
        new PersonalAccessToken_schema_1.PersonalAccessToken({
            userId: auth.userId,
            accessToken: token.access,
            refreshToken: token.refresh
        }).save();
        return res.status(200).json({ token: token.access });
    }
    catch (e) {
        (0, utils_1.logger)('auth.controller', 'generateToken', e.message, 'AUTH-0001');
        return res.status(500).json({ code: 'AUTH-0001' });
    }
});
let logout = (res, a, accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let auth = a;
        yield PersonalAccessToken_schema_1.PersonalAccessToken.findOneAndDelete({ userId: auth.userId, accessToken }).exec();
        return res.status(200).json({ logout: true });
    }
    catch (e) {
        (0, utils_1.logger)('auth.controller', 'logout', e.message, 'AUTH-0002');
        return res.status(500).json({ code: 'AUTH-0002' });
    }
});
let requestToken = (res, accessToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let decode = jwt.decode(accessToken);
        let auth = (yield Auth_schema_1.default.findOne({ userId: decode.sub }).exec());
        if (!auth)
            return res.status(403).json({ msg: 'NO_ACCT' });
        let pat = (yield PersonalAccessToken_schema_1.PersonalAccessToken.findOne({ accessToken, userId: decode.sub }).exec());
        if (!pat)
            return res.status(403).json({ msg: 'FORBIDDEN' });
        if (!jwt.verify(pat.refreshToken, config_1.env.JWT_SECRET))
            return res.status(403).json({ msg: 'SESSION_EXPIRED' });
        let { access, refresh } = auth.generateToken();
        pat.accessToken = access;
        pat.refreshToken = refresh;
        pat.save();
        return res.status(200).json({ token: access });
    }
    catch (e) {
        (0, utils_1.logger)('auth.controller', 'requestToken', e.message, 'AUTH-0003');
        return res.status(500).json({ code: 'AUTH-0003' });
    }
});
const AuthService = {
    generateToken,
    logout,
    requestToken
};
exports.default = AuthService;
