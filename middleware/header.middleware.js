"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.header = void 0;
const header = (req, res, next) => {
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Content-Security-Policy', 'frame-ancestors "none"');
    next();
};
exports.header = header;
