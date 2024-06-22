"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IO = void 0;
const IO = (io) => {
    const onConnection = (socket) => {
    };
    io.on('connection', onConnection);
};
exports.IO = IO;
