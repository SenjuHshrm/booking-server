"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = void 0;
const port = (env) => {
    return env === 'development' ? 3000 : 4000;
};
exports.port = port;
