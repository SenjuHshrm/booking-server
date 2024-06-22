"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./modules/auth/controller/auth.controller");
const global_static_controller_1 = require("./modules/global-static/controller/global-static.controller");
const staycation_controller_1 = require("./modules/staycation/controller/staycation.controller");
const payment_controller_1 = require("./modules/payment/controller/payment.controller");
const user_controller_1 = require("./modules/user/controller/user.controller");
exports.Routes = (0, express_1.Router)()
    .use('/auth', auth_controller_1.authRoutes)
    .use('/global-statics', global_static_controller_1.globalStaticRoutes)
    .use('/staycation', staycation_controller_1.staycationRoutes)
    .use('/payment', payment_controller_1.paymentRoutes)
    .use('/user', user_controller_1.userRoutes);
