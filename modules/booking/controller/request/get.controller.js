"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booking_service_1 = __importDefault(require("../../booking.service"));
const passport_1 = __importDefault(require("passport"));
const token_payload_1 = require("../../../../utils/token-payload");
const validate_pagination_1 = __importDefault(require("../../../../utils/validate-pagination"));
const getBookingRoutes = (0, express_1.Router)()
    .get("/list/:id/:page/:limit/:type", passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    var _a;
    const { limit, offset } = (0, validate_pagination_1.default)(req.params.limit, req.params.page);
    return booking_service_1.default.getBookingByType(res, req.params.type, limit, offset, (_a = req.query) === null || _a === void 0 ? void 0 : _a.search, req.params.id);
})
    .get("/trips", passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    var _a, _b, _c, _d;
    const type = req.query.type || "upcoming";
    const { limit, offset } = (0, validate_pagination_1.default)((_a = req.query) === null || _a === void 0 ? void 0 : _a.limit, (_b = req.query) === null || _b === void 0 ? void 0 : _b.page);
    const authId = (_c = (0, token_payload_1.getToken)(req)) === null || _c === void 0 ? void 0 : _c.sub;
    return booking_service_1.default.listBookingByGuestId(res, type, limit, offset, (_d = req.query) === null || _d === void 0 ? void 0 : _d.search, authId);
})
    .get("/guest-list/:bookingId", passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    return booking_service_1.default.listGuestFromBooking(res, req.params.bookingId);
})
    .get("/cancelled/:id/:page/:limit", passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
    var _a;
    const { limit, offset } = (0, validate_pagination_1.default)(req.params.limit, req.params.page);
    return booking_service_1.default.getCancelledRequest(res, limit, offset, (_a = req.query) === null || _a === void 0 ? void 0 : _a.search, req.params.id);
});
exports.default = getBookingRoutes;
