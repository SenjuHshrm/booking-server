"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csrfErrorHandler = exports.csrf = void 0;
const csrf_csrf_1 = require("csrf-csrf");
const config_1 = require("../config");
exports.csrf = (0, csrf_csrf_1.doubleCsrf)({
    getSecret: ((req) => req.secret),
    cookieName: `${config_1.env.DOMAIN_NAME}.${config_1.env.CSRF_COOKIE_NAME}`,
    cookieOptions: {
        sameSite: 'lax',
        path: '/',
        secure: true,
        signed: true,
        domain: 'localhost',
    },
    size: 32,
    ignoredMethods: ["GET", "HEAD", "OPTIONS"],
    getTokenFromRequest: ((req) => req.headers[config_1.env.CSRF_HEADER_NAME])
});
const csrfErrorHandler = (e, req, res, next) => {
    console.log("ERROR: ", e);
    console.log(req.headers[config_1.env.CSRF_HEADER_NAME]);
    if (e === exports.csrf.invalidCsrfTokenError) {
        res.status(403).json({
            error: 'CSRF Validation error'
        });
    }
    else {
        next();
    }
};
exports.csrfErrorHandler = csrfErrorHandler;
