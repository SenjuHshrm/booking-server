"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getNotifRoutes = (0, express_1.Router)()
    .get('/notifications/:id/:page/:limit', (req, res) => {
    global.io.of('/notification').in('general-notification').fetchSockets();
});
