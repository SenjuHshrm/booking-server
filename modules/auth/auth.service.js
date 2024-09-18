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
const User_schema_1 = __importDefault(require("./../user/schema/User.schema"));
const payment_service_1 = __importDefault(require("./../payment/payment.service"));
const moment_1 = __importDefault(require("moment"));
let generateToken = (res, a) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let auth = a;
        let user = (yield User_schema_1.default.findById(auth.userId).exec());
        let token = auth.generateToken(user.img);
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
        let user = (yield User_schema_1.default.findById(auth.userId).exec());
        let { access, refresh } = auth.generateToken(user.img);
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
let updatePassword = (res, userId, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let auth = (yield Auth_schema_1.default.findOne({ userId }).exec());
        auth.generateHash(password);
        auth.save();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('auth.controller', 'updatePassword', e.message, 'AUTH-0004');
        return res.status(500).json({ code: 'AUTH-0004' });
    }
});
let googleLogin = (res, authData, userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let test = (yield Auth_schema_1.default.findOne({ google: authData.id, email: authData.email }).exec());
        if (!test) {
            let u = (yield new User_schema_1.default({
                name: {
                    fName: userData.firstName,
                    mName: '',
                    lName: userData.lastName,
                    xName: ''
                },
                img: userData.photoUrl,
                status: 'active',
                identificationStat: 'pending',
                approvedAsProprietorOn: ''
            }).save());
            let a = (yield new Auth_schema_1.default({
                userId: u.id,
                email: authData.email,
                google: authData.id,
                access: ['customer']
            }).save());
            let token = a.generateToken(u.img);
            new PersonalAccessToken_schema_1.PersonalAccessToken({
                userId: u.id,
                accessToken: token.access,
                refreshToken: token.refresh
            }).save();
            payment_service_1.default.addCustomer(u.id, { fName: userData.firstName, lName: userData.lastName, email: authData.email, password: '' }, '');
            return res.status(200).json({ token: token.access });
        }
        else {
            let u = (yield User_schema_1.default.findById(test.userId).exec());
            let t = test.generateToken(u.img);
            new PersonalAccessToken_schema_1.PersonalAccessToken({
                userId: test.userId,
                accessToken: t.access,
                refreshToken: t.refresh
            }).save();
            return res.status(200).json({ token: t.access });
        }
    }
    catch (e) {
        (0, utils_1.logger)('auth.controller', 'googleLogin', e.message, 'AUTH-0005');
        return res.status(500).json({ code: 'AUTH-0005' });
    }
});
let checkStatus = (auth, currentDate) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let a = auth;
        let resp = { res: false, msg: '' };
        let user = (yield User_schema_1.default.findById(a.userId).exec());
        switch (user.status) {
            case 'active':
                resp = { res: true, msg: '' };
                break;
            case 'suspended':
                let date = (0, moment_1.default)(currentDate, 'MM/DD/YYYY');
                let suspensionDue = (0, moment_1.default)(user.suspendedUntil);
                if (suspensionDue.diff(date, 'days') > 0)
                    resp = { res: false, msg: `Your account is suspended until ${(0, moment_1.default)(user.suspendedUntil).format('MMMM DD, YYYY')}` };
                user.status = 'active';
                user.suspendedUntil = '';
                user.save();
                resp = { res: true, msg: '' };
                break;
            case 'terminated':
                resp = { res: false, msg: 'Your account is terminated.' };
                break;
        }
        return resp;
    }
    catch (e) {
        (0, utils_1.logger)('auth.controller', 'checkStatus', e.message, 'AUTH-0006');
        return null;
    }
});
const AuthService = {
    generateToken,
    logout,
    requestToken,
    updatePassword,
    googleLogin,
    checkStatus
};
exports.default = AuthService;
