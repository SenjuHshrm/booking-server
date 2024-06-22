"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EWelcomingGuest = exports.EReservationConfirmation = exports.EPlaceType = void 0;
var EPlaceType;
(function (EPlaceType) {
    EPlaceType[EPlaceType["event_place"] = 0] = "event_place";
    EPlaceType[EPlaceType["room"] = 1] = "room";
    EPlaceType[EPlaceType["room_shared"] = 2] = "room_shared";
})(EPlaceType || (exports.EPlaceType = EPlaceType = {}));
var EReservationConfirmation;
(function (EReservationConfirmation) {
    EReservationConfirmation[EReservationConfirmation["instant_book"] = 0] = "instant_book";
    EReservationConfirmation[EReservationConfirmation["direct_msg"] = 1] = "direct_msg";
})(EReservationConfirmation || (exports.EReservationConfirmation = EReservationConfirmation = {}));
var EWelcomingGuest;
(function (EWelcomingGuest) {
    EWelcomingGuest[EWelcomingGuest["tarago"] = 0] = "tarago";
    EWelcomingGuest[EWelcomingGuest["exp_guest"] = 1] = "exp_guest";
})(EWelcomingGuest || (exports.EWelcomingGuest = EWelcomingGuest = {}));
