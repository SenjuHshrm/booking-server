"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booking_service_1 = __importDefault(require("./../../booking.service"));
const token_payload_1 = require("../../../../utils/token-payload");
const postBookingRoutes = (0, express_1.Router)()
    .post("/add-booking", (req, res) => {
    return booking_service_1.default.addBooking(res, req.body);
})
    .post("/temp-add-booking", (req, res) => {
    return booking_service_1.default.tempBooking(res, req.body.booking, req.body.transaction);
})
    .post("/request-cancellation/:booking", (req, res) => {
    return booking_service_1.default.requestCancellation(res, req.params.booking, req.body.reason);
})
    .post("/update-cancel-status/:booking", (req, res) => {
    return booking_service_1.default.updateCancelRequest(res, req.params.booking);
})
    /**
     * req.body
     *
     * { name: string, checkInDate: string, checkInTime: string }
     */
    .post("/add-guest/:booking", (req, res) => {
    return booking_service_1.default.addGuest(res, req.params.booking, req.body);
})
    .post("/checkout-guest/:booking", (req, res) => {
    return booking_service_1.default.checkOutGuest(res, req.params.booking, req.body.checkOutDate, req.body.checkOutTime);
})
    .post("/update-booking-status/:booking", (req, res) => {
    return booking_service_1.default.updateBookStatus(res, req.params.booking, req.body.status);
})
    .post("/check-in/:booking", (req, res) => {
    const token = (0, token_payload_1.getToken)(req);
    return booking_service_1.default.checkInOutBooking(res, req.params.booking, token === null || token === void 0 ? void 0 : token.sub, "current_guest");
})
    .post("/check-out/:booking", (req, res) => {
    const token = (0, token_payload_1.getToken)(req);
    return booking_service_1.default.checkInOutBooking(res, req.params.booking, token === null || token === void 0 ? void 0 : token.sub, "check_out");
})
    .post("/cancel-booking", (req, res) => {
    const token = (0, token_payload_1.getToken)(req);
    const { bookingId, reason } = req.body;
    return booking_service_1.default.guestCancelBooking(res, token.sub, bookingId, reason);
})
    .post("/approve-cancel/:bookingId/:cancelId", (req, res) => {
    const token = (0, token_payload_1.getToken)(req);
    const { bookingId, cancelId } = req.params;
    return booking_service_1.default.approveDenyCancellation(res, cancelId, bookingId, token.sub, "approve");
})
    .post("/deny-cancel/:bookingId/:cancelId", (req, res) => {
    const token = (0, token_payload_1.getToken)(req);
    const { bookingId, cancelId } = req.params;
    return booking_service_1.default.approveDenyCancellation(res, cancelId, bookingId, token.sub, "deny");
});
exports.default = postBookingRoutes;
