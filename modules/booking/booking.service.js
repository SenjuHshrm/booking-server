"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Booking_schema_1 = __importDefault(require("./schema/Booking.schema"));
const logger_util_1 = require("./../../utils/logger.util");
const Transaction_schema_1 = __importDefault(require("./../payment/schema/Transaction.schema"));
const moment_1 = __importDefault(require("moment"));
const mongoose_1 = __importDefault(require("mongoose"));
const BookingCancellation_schema_1 = __importDefault(require("./schema/BookingCancellation.schema"));
const BookingGuest_schema_1 = __importDefault(require("./schema/BookingGuest.schema"));
let addBooking = (res, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        new Booking_schema_1.default(Object.assign({}, data)).save();
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "addBooking", e.message, "BKNG-0001");
        return res.status(500).json({ code: "BKNG-0001" });
    }
});
let addPaymentToBooking = (res, id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Booking_schema_1.default.findByIdAndUpdate(id, {
            $push: { payment: Object.assign({}, data) },
        }).exec();
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "addPaymentToBooking", e.message, "BKNG-0002");
        return res.status(500).json({ code: "BKNG-0002" });
    }
});
let listBookingByGuestId = (res, type, limit, offset, keyword, initiatedBy) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const populatedFields = [
            {
                $lookup: {
                    from: "users",
                    localField: "initiatedBy",
                    foreignField: "_id",
                    as: "initiatedBy",
                },
            },
            {
                $unwind: "$initiatedBy",
            },
            {
                $lookup: {
                    from: "staycations",
                    localField: "bookTo",
                    foreignField: "_id",
                    as: "bookTo",
                    pipeline: [
                        {
                            $lookup: {
                                from: "users",
                                localField: "host",
                                foreignField: "_id",
                                as: "host",
                            },
                        },
                        {
                            $unwind: "$host",
                        },
                        {
                            $project: {
                                _id: 1,
                                host: {
                                    _id: 1,
                                    name: 1,
                                },
                                descriptionFilter: 1,
                                placeType: 1,
                                maxBooking: 1,
                                address: 1,
                                landmark: 1,
                                cover: 1,
                                name: 1,
                                bedroomList: 1,
                            },
                        },
                    ],
                },
            },
            {
                $unwind: "$bookTo",
            },
            {
                $lookup: {
                    from: "transactions",
                    localField: "transaction",
                    foreignField: "_id",
                    as: "transaction",
                },
            },
            {
                $unwind: "$transaction",
            },
        ];
        const addFullname = {
            $addFields: {
                fullName: {
                    $concat: [
                        "$initiatedBy.name.fName",
                        " ",
                        {
                            $cond: {
                                if: {
                                    $and: [
                                        {
                                            $ne: ["$initiatedBy.name.mName", ""],
                                        },
                                        {
                                            $ne: ["$initiatedBy.name.mName", null],
                                        },
                                    ],
                                },
                                then: {
                                    $concat: [
                                        {
                                            $substrCP: ["$initiatedBy.name.mName", 0, 1],
                                        },
                                        ". ",
                                    ],
                                },
                                else: "",
                            },
                        },
                        "$initiatedBy.name.lName",
                        {
                            $cond: {
                                if: {
                                    $ne: ["$initiatedBy.name.xName", ""],
                                },
                                then: {
                                    $concat: [", ", "$initiatedBy.name.xName"],
                                },
                                else: "",
                            },
                        },
                    ],
                },
            },
        };
        const project = {
            $project: {
                _id: 1,
                initiatedBy: {
                    _id: 1,
                    img: 1,
                    fullName: "$fullName",
                    contact: 1,
                },
                bookTo: 1,
                status: 1,
                duration: 1,
                details: 1,
                transaction: 1,
                isCancelled: 1,
                cancellationPolicy: 1,
                isApproved: 1,
                createdAt: 1,
            },
        };
        const sort = {
            $sort: {
                createdAt: -1,
            },
        };
        const skipper = {
            $skip: offset,
        };
        const limiter = {
            $limit: limit,
        };
        let filter = {
            $match: {
                $and: [
                    { "initiatedBy._id": new mongoose_1.default.Types.ObjectId(initiatedBy) },
                    { status: type },
                ],
            },
        };
        if (keyword) {
            filter.$match.$and.push({
                "bookTo.name": new RegExp(`${keyword}`, "imu"),
            });
        }
        const count = yield Booking_schema_1.default.aggregate([
            ...populatedFields,
            addFullname,
            project,
            filter,
            { $count: "totalCount" },
        ]).exec();
        const bookings = yield Booking_schema_1.default.aggregate([
            ...populatedFields,
            addFullname,
            project,
            filter,
            sort,
            skipper,
            limiter,
        ]).exec();
        return res.json({
            bookings,
            totalCount: count.length > 0 ? count[0].totalCount : 0,
        });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "listBookingByGuestId", e.message, "BKNG-0003");
        return res.status(500).json({ code: "BKNG-0003" });
    }
});
let listAllBookingsByHost = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let total = yield Booking_schema_1.default.countDocuments({ bookTo: id }).exec();
        let bookings = (yield Booking_schema_1.default.find({ bookTo: id })
            .populate({ path: "initiatedBy", select: "_id name img" })
            .exec());
        return res.status(200).json({ total, bookings });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "listAllBookingsByHost", e.message, "BKNG-0004");
        return res.status(500).json({ code: "BKNG-0004" });
    }
});
let removeBooking = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Booking_schema_1.default.findByIdAndDelete(id).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "removeBooking", e.message, "BKNG-0005");
        return res.status(500).json({ code: "BKNG-0005" });
    }
});
let getBookingDetails = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let booking = yield Booking_schema_1.default.findById(id)
            .populate([
            { path: "initiatedBy", select: "_id name img" },
            { path: "bookTo", select: "_id name cover" },
        ])
            .exec();
        return res.status(200).json(booking);
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "getBookingDetails", e.message, "BKNG-0006");
        return res.status(500).json({ code: "BKNG-0006" });
    }
});
let tempBooking = (res, data, trn) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newTrn = yield new Transaction_schema_1.default(Object.assign({}, trn)).save();
        new Booking_schema_1.default(Object.assign(Object.assign({}, data), { transaction: newTrn.id })).save();
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "tempBooking", e.message, "BKNG-0007");
        return res.status(500).json({ code: "BKNG-0007" });
    }
});
let getBookingByType = (res, type, limit, offset, keyword, hostId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const populatedFields = [
            {
                $lookup: {
                    from: "users",
                    localField: "initiatedBy",
                    foreignField: "_id",
                    as: "initiatedBy",
                },
            },
            {
                $unwind: "$initiatedBy",
            },
            {
                $lookup: {
                    from: "staycations",
                    localField: "bookTo",
                    foreignField: "_id",
                    as: "bookTo",
                },
            },
            {
                $unwind: "$bookTo",
            },
            {
                $lookup: {
                    from: "transactions",
                    localField: "transaction",
                    foreignField: "_id",
                    as: "transaction",
                },
            },
            {
                $unwind: "$transaction",
            },
        ];
        const addFullname = {
            $addFields: {
                fullName: {
                    $concat: [
                        "$initiatedBy.name.fName",
                        " ",
                        {
                            $cond: {
                                if: {
                                    $and: [
                                        {
                                            $ne: ["$initiatedBy.name.mName", ""],
                                        },
                                        {
                                            $ne: ["$initiatedBy.name.mName", null],
                                        },
                                    ],
                                },
                                then: {
                                    $concat: [
                                        {
                                            $substrCP: ["$initiatedBy.name.mName", 0, 1],
                                        },
                                        ". ",
                                    ],
                                },
                                else: "",
                            },
                        },
                        "$initiatedBy.name.lName",
                        {
                            $cond: {
                                if: {
                                    $ne: ["$initiatedBy.name.xName", ""],
                                },
                                then: {
                                    $concat: [", ", "$initiatedBy.name.xName"],
                                },
                                else: "",
                            },
                        },
                    ],
                },
            },
        };
        const project = {
            $project: {
                _id: 1,
                initiatedBy: {
                    _id: 1,
                    img: 1,
                    fullName: "$fullName",
                    contact: 1,
                },
                bookTo: 1,
                status: 1,
                duration: 1,
                details: 1,
                transaction: 1,
                isCancelled: 1,
                cancellationPolicy: 1,
                isApproved: 1,
                createdAt: 1,
            },
        };
        const sort = {
            $sort: {
                createdAt: -1,
            },
        };
        const skipper = {
            $skip: offset,
        };
        const limiter = {
            $limit: limit,
        };
        let filter = {
            $match: {
                $and: [
                    { "bookTo.host": new mongoose_1.default.Types.ObjectId(hostId) },
                    { status: type },
                ],
            },
        };
        if (keyword) {
            filter.$match.$and.push({
                "initiatedBy.fullName": new RegExp(`${keyword}`, "imu"),
            });
        }
        const count = yield Booking_schema_1.default.aggregate([
            ...populatedFields,
            addFullname,
            project,
            filter,
            { $count: "totalCount" },
        ]).exec();
        const bookings = yield Booking_schema_1.default.aggregate([
            ...populatedFields,
            addFullname,
            project,
            filter,
            sort,
            skipper,
            limiter,
        ]).exec();
        return res.json({
            bookings,
            totalCount: count.length > 0 ? count[0].totalCount : 0,
        });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "bookingByTyoe", e.message, "BKNG-0008");
        return res.status(500).json({ code: "BKNG-0007" });
    }
});
let requestCancellation = (res, id, reason) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        new BookingCancellation_schema_1.default({ booking: id, reason, status: "pending" }).save();
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "requestCancellation", e.message, "BKNG-0007");
        return res.status(500).json({ code: "BKNG-0007" });
    }
});
let updateCancelRequest = (res, booking) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Booking_schema_1.default.findByIdAndUpdate(booking, {
            $set: { status: "cancelled" },
        }).exec();
        yield BookingCancellation_schema_1.default.findOneAndUpdate({ booking }, { $set: { status: "cancelled" } }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "updateCancelRequest", e.message, "BKNG-0008");
        return res.status(500).json({ code: "BKNG-0008" });
    }
});
let addGuest = (res, booking, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        new BookingGuest_schema_1.default(Object.assign(Object.assign({}, data), { booking })).save();
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "updateCancelRequest", e.message, "BKNG-0009");
        return res.status(500).json({ code: "BKNG-0009" });
    }
});
let updateBookStatus = (res, booking, status) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Booking_schema_1.default.findByIdAndUpdate(booking, { $set: { status } }).exec();
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "updateCancelRequest", e.message, "BKNG-0010");
        return res.status(500).json({ code: "BKNG-0010" });
    }
});
let checkOutGuest = (res, id, checkOutDate, checkOutTime) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield BookingGuest_schema_1.default.findByIdAndUpdate(id, {
            $set: { checkOutDate, checkOutTime },
        }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "updateCancelRequest", e.message, "BKNG-0011");
        return res.status(500).json({ code: "BKNG-0011" });
    }
});
let listGuestFromBooking = (res, booking) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let list = yield BookingGuest_schema_1.default.find({ booking }).exec();
        return res.status(200).json(list);
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "listGuestFromBooking", e.message, "BKNG-0012");
        return res.status(500).json({ code: "BKNG-0012" });
    }
});
let guestCancelBooking = (res, authId, bookingId, reason) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!mongoose_1.default.Types.ObjectId.isValid(bookingId)) {
            return res.status(400).json({ msg: "Invalid booking ID." });
        }
        const booking = yield Booking_schema_1.default.findOne({
            _id: bookingId,
            initiatedBy: authId,
        }).exec();
        if (!booking)
            return res.status(400).json({ msg: "Booking not found." });
        if (booking.status === "for_approval") {
            return updateBookStatus(res, booking._id, "cancelled");
        }
        if (["upcoming", "arriving"].includes(booking.status) && reason) {
            const request = yield BookingCancellation_schema_1.default.findOne({
                booking: booking._id,
            }).exec();
            if (request)
                return res.status(400).json({
                    msg: "A cancellation request has already been submitted. Please wait for the host's approval.",
                });
            return requestCancellation(res, booking._id, reason);
        }
        return res.status(400).json({ msg: "Booking cannot be cancelled." });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "cancelBooking", e.message, "BKNG-0013");
        return res.status(500).json({ code: "BKNG-0013" });
    }
});
let checkInOutBooking = (res, bookingId, authId, status) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (!["current_guest", "check_out"].includes(status))
            return res.status(400).json({
                msg: "The provided booking status is invalid for check-in/check-out operations.",
            });
        if (!mongoose_1.default.Types.ObjectId.isValid(bookingId))
            return res.status(400).json({ msg: "Invalid booking ID" });
        const statusFilter = status === "current_guest" ? "arriving" : "current_guest";
        const bookPromise = (Booking_schema_1.default.findOne({ _id: bookingId, status: statusFilter })
            .populate("bookTo")
            .exec());
        const guestsPromise = (BookingGuest_schema_1.default.countDocuments({
            booking: bookingId,
        }).exec());
        const [book, guests] = yield Promise.all([bookPromise, guestsPromise]);
        if (!book)
            return res.status(400).json({ msg: "Booking not found." });
        if (!new mongoose_1.default.Types.ObjectId(authId).equals((_a = book.bookTo) === null || _a === void 0 ? void 0 : _a.host))
            return res.status(400).json({
                msg: "Access denied: You are not authorized to change the status of this booking. Please contact an administrator if you believe this is an error.",
            });
        if (guests < 1)
            return res.status(400).json({
                msg: "The guest list for this booking is currently empty. Please add guests before proceeding.",
            });
        if (status === "check_out") {
            const checkedOutGuests = yield BookingGuest_schema_1.default.countDocuments({
                booking: bookingId,
                checkOutDate: { $exists: true, $ne: "" },
            }).exec();
            if (checkedOutGuests !== guests) {
                return res.status(400).json({
                    msg: "Not all guests for this booking have checked out. Please ensure all guests have checked out before completing the booking check-out process.",
                });
            }
        }
        const filter = { _id: book._id };
        let updates = { $set: {} };
        const currentTime = (0, moment_1.default)().format("HH:mm");
        const currentDate = (0, moment_1.default)().format("MM/DD/YYYY");
        if (status === "current_guest") {
            updates.$set.checkInTime = currentTime;
            updates.$set.checkInDate = currentDate;
        }
        if (status === "check_out") {
            updates.$set.checkOutTime = currentTime;
            updates.$set.checkOutDate = currentDate;
        }
        yield Booking_schema_1.default.updateOne(filter, updates).exec();
        return updateBookStatus(res, book._id, status);
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "checkInOutBooking", e.message, "BKNG-0014");
        return res.status(500).json({ code: "BKNG-0014" });
    }
});
let getCancelledRequest = (res, limit, offset, keyword, hostId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const populatedFields = [
            {
                $lookup: {
                    from: "booking-cancellations",
                    localField: "_id",
                    foreignField: "booking",
                    as: "cancel",
                },
            },
            {
                $unwind: "$cancel",
            },
            {
                $lookup: {
                    from: "users",
                    localField: "initiatedBy",
                    foreignField: "_id",
                    as: "initiatedBy",
                },
            },
            {
                $unwind: "$initiatedBy",
            },
            {
                $lookup: {
                    from: "staycations",
                    localField: "bookTo",
                    foreignField: "_id",
                    as: "bookTo",
                },
            },
            {
                $unwind: "$bookTo",
            },
            {
                $lookup: {
                    from: "transactions",
                    localField: "transaction",
                    foreignField: "_id",
                    as: "transaction",
                },
            },
            {
                $unwind: "$transaction",
            },
        ];
        const addFullname = {
            $addFields: {
                fullName: {
                    $concat: [
                        "$initiatedBy.name.fName",
                        " ",
                        {
                            $cond: {
                                if: {
                                    $and: [
                                        {
                                            $ne: ["$initiatedBy.name.mName", ""],
                                        },
                                        {
                                            $ne: ["$initiatedBy.name.mName", null],
                                        },
                                    ],
                                },
                                then: {
                                    $concat: [
                                        {
                                            $substrCP: ["$initiatedBy.name.mName", 0, 1],
                                        },
                                        ". ",
                                    ],
                                },
                                else: "",
                            },
                        },
                        "$initiatedBy.name.lName",
                        {
                            $cond: {
                                if: {
                                    $ne: ["$initiatedBy.name.xName", ""],
                                },
                                then: {
                                    $concat: [", ", "$initiatedBy.name.xName"],
                                },
                                else: "",
                            },
                        },
                    ],
                },
            },
        };
        const project = {
            $project: {
                _id: 1,
                initiatedBy: {
                    _id: 1,
                    img: 1,
                    fullName: "$fullName",
                    contact: 1,
                },
                bookTo: 1,
                status: 1,
                duration: 1,
                details: 1,
                transaction: 1,
                isCancelled: 1,
                cancellationPolicy: 1,
                isApproved: 1,
                createdAt: 1,
                cancel: 1,
            },
        };
        const sort = {
            $sort: {
                createdAt: -1,
            },
        };
        const skipper = {
            $skip: offset,
        };
        const limiter = {
            $limit: limit,
        };
        let filter = {
            $match: {
                $and: [{ "bookTo.host": new mongoose_1.default.Types.ObjectId(hostId) }],
            },
        };
        if (keyword) {
            filter.$match.$and.push({
                "initiatedBy.fullName": new RegExp(`${keyword}`, "imu"),
            });
        }
        const count = yield Booking_schema_1.default.aggregate([
            ...populatedFields,
            addFullname,
            project,
            filter,
            { $count: "totalCount" },
        ]).exec();
        const bookings = yield Booking_schema_1.default.aggregate([
            ...populatedFields,
            addFullname,
            project,
            filter,
            sort,
            skipper,
            limiter,
        ]).exec();
        return res.json({
            bookings,
            totalCount: count.length > 0 ? count[0].totalCount : 0,
        });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "getCancelledRequest", e.message, "BKNG-0015");
        return res.status(500).json({ code: "BKNG-0015" });
    }
});
let approveDenyCancellation = (res, cancelId, bookingId, authId, action) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        // if (!["approve", "deny"].includes(action))
        //   return res.status(400).json({
        //     msg: "The provided action is invalid for approve/deny operations.",
        //   });
        if (!mongoose_1.default.Types.ObjectId.isValid(cancelId))
            return res.status(400).json({ msg: "Invalid cancellation request ID" });
        if (!mongoose_1.default.Types.ObjectId.isValid(bookingId))
            return res.status(400).json({ msg: "Invalid booking ID" });
        const bookPromise = (Booking_schema_1.default.findOne({ _id: bookingId }).populate("bookTo").exec());
        const cancelPromise = BookingCancellation_schema_1.default.findOne({ _id: cancelId, booking: bookingId }).exec();
        const [book, cancel] = yield Promise.all([bookPromise, cancelPromise]);
        if (!book)
            return res.status(400).json({ msg: "Booking not found." });
        if (!cancel)
            return res.status(400).json({ msg: "Cancellation request not found." });
        if (!new mongoose_1.default.Types.ObjectId(authId).equals((_b = book.bookTo) === null || _b === void 0 ? void 0 : _b.host))
            return res.status(400).json({
                msg: "Access denied: You are not authorized to change the status of this booking. Please contact an administrator if you believe this is an error.",
            });
        const cancelUpdates = {
            $set: { status: action === "approve" ? "approved" : "denied" },
        };
        const bookingUpdates = {
            $set: { status: action === "approve" ? "cancelled" : "upcoming" },
        };
        yield BookingCancellation_schema_1.default.updateOne({ _id: cancel._id }, cancelUpdates);
        yield Booking_schema_1.default.updateOne({ _id: book._id }, bookingUpdates);
        return res.json({
            cancelStatus: action === "approve" ? "approved" : "denied",
        });
    }
    catch (e) {
        (0, logger_util_1.logger)("booking.controller", "approveDenyCancellation", e.message, "BKNG-0016");
        return res.status(500).json({ code: "BKNG-0015" });
    }
});
const BookingService = {
    addBooking,
    addPaymentToBooking,
    listBookingByGuestId,
    listAllBookingsByHost,
    removeBooking,
    getBookingDetails,
    tempBooking,
    getBookingByType,
    requestCancellation,
    updateCancelRequest,
    addGuest,
    updateBookStatus,
    checkOutGuest,
    listGuestFromBooking,
    guestCancelBooking,
    checkInOutBooking,
    getCancelledRequest,
    approveDenyCancellation,
};
exports.default = BookingService;
