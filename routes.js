"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./modules/auth/controller/auth.controller");
const global_static_controller_1 = require("./modules/global-static/controller/global-static.controller");
const staycation_controller_1 = require("./modules/staycation/controller/staycation.controller");
const payment_controller_1 = require("./modules/payment/controller/payment.controller");
const user_controller_1 = require("./modules/user/controller/user.controller");
const message_controller_1 = require("./modules/message/controller/message.controller");
const faqs_controller_1 = __importDefault(require("./modules/faqs/controller/faqs.controller"));
const report_controller_1 = __importDefault(require("./modules/report/controller/report.controller"));
const img_carousel_controller_1 = __importDefault(require("./modules/img-carousel/controller/img-carousel.controller"));
const booking_controller_1 = __importDefault(require("./modules/booking/controller/booking.controller"));
exports.Routes = (0, express_1.Router)()
    .use('/auth', auth_controller_1.authRoutes)
    .use('/global-statics', global_static_controller_1.globalStaticRoutes)
    .use('/staycation', staycation_controller_1.staycationRoutes)
    .use('/payment', payment_controller_1.paymentRoutes)
    .use('/user', user_controller_1.userRoutes)
    .use('/message', message_controller_1.messageRoutes)
    .use('/faqs', faqs_controller_1.default)
    .use('/report', report_controller_1.default)
    .use('/img-carousel', img_carousel_controller_1.default)
    .use('/booking', booking_controller_1.default);
