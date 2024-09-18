"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./../../../config");
const join = (socket) => {
    let mainJoin = (id) => {
        // socket.data.userId = id
        let idKey = `${id}:notif`;
        config_1.redisClient.rPush(idKey, socket.id);
        socket.join(`notif:${id}`);
        socket.join('notif:general');
        console.log(`User ${id} joined notif`);
    };
    socket.on('notif:join', mainJoin);
};
exports.default = join;
