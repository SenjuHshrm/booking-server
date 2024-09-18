"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./../../../config");
const join = (socket) => {
    let mainJoin = (id) => {
        // socket.data.userId = id
        let idKey = `${id}:main`;
        config_1.redisClient.rPush(idKey, socket.id);
        console.log(`User ${idKey} joined main`);
    };
    socket.on('main:join', mainJoin);
};
exports.default = join;
