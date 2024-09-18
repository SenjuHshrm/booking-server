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
exports.checkBookingArrivals = void 0;
const node_schedule_1 = require("node-schedule");
const moment_1 = __importDefault(require("moment"));
const Booking_schema_1 = __importDefault(require("./../modules/booking/schema/Booking.schema"));
const notification_service_1 = __importDefault(require("./../modules/notification/notification.service"));
const config_1 = require("./../config");
/**
 * cron (0-59?, 0-59, 0-23, 1-31, 1-12, 0-7 (0/7=Sun))
 */
function checkBookingArrivals() {
    (0, node_schedule_1.scheduleJob)('1 2 0 * * *', () => __awaiter(this, void 0, void 0, function* () {
        let currentDate = (0, moment_1.default)().format('MM/DD/YYYY');
        // let staycations: IStaycationSchema[] = <IStaycationSchema[]>(await Staycation.find({}).exec())
        // staycations.forEach(async (staycation: IStaycationSchema) => {
        //   // await Booking.updateMany({ bookTo: staycation._id, 'duration.start': currentDate }, { $set: { status: 'arriving' } }).exec()
        //   let booking: IBookingSchema[] = <IBookingSchema[]>(await Booking.find({ bookTo: staycation.id, 'duration.start': currentDate }).populate({ path: 'initiatedBy', select: '_id name' }).exec())
        //   booking.forEach((book: IBookingSchema) => {
        //     book.status = 'arriving'
        //     book.save()
        //   })
        // })
        let bookings = (yield Booking_schema_1.default.find({ 'duration.start': currentDate, status: 'upcoming' }).populate([{ path: 'initiatedBy', select: '_id name' }, { path: 'bookTo', select: '_id host name' }]).exec());
        bookings.forEach((booking) => __awaiter(this, void 0, void 0, function* () {
            booking.status = 'arriving';
            booking.save();
            let from = booking.initiatedBy._id, to = booking.bookTo.host.toString();
            let notif = yield notification_service_1.default.addNotification({
                from,
                to: [to],
                type: 'booking',
                link: '',
                msg: `Your guest ${booking.initiatedBy.name.fName} will arrive today.`,
                isRead: false
            });
            let ln = yield config_1.redisClient.lLen(to);
            let socketId = yield config_1.redisClient.lRange(to, 0, ln);
            notification_service_1.default.incrementNotifCount(to, 'notif');
            global.io.sockets.to(socketId).emit('main:notif-count', { count: 1 });
            global.io.of('/notification').to(`notif:${to}`).emit('notif:unshift', notif);
        }));
    }));
}
exports.checkBookingArrivals = checkBookingArrivals;
