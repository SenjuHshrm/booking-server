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
// export interface IStaycationSchema extends Document {
//   // name: string;
//   // host: typeof Types.ObjectId;
//   // details: typeof Schema.Types.Mixed[];
//   // currentRating: number; 
//   // desc: string;
//   // media: string[];
//   // pricing: typeof Schema.Types.Mixed[];
//   // promos: typeof Schema.Types.Mixed[];
//   // amenities: string[];
//   host: typeof Types.ObjectId;
//   name: string;
//   descriptionFilter: string[];
//   descriptionText: string[];
//   placeDescription: string;
//   // offers: string;
//   placeType: keyof typeof EPlaceType;
//   // location: {
//   //   type: string,
//   //   coordinates: any
//   // };
//   address: {
//     country: string;
//     unit?: string;
//     street: string;
//     brgy?: string;
//     city: string;
//     province: string;
//     zip: string;
//   };
//   landmark: string;
//   // bedrooms?: {
//   //   img: string;
//   //   desc: string;
//   // }[];
//   details: typeof Schema.Types.Mixed;
//   amenities: string[];
//   media: {
//     cover: string;
//     imgs: string[];
//   },
//   reservationConfirmation: keyof typeof EReservationConfirmation;
//   welcomingGuest: keyof typeof EWelcomingGuest;
//   price: {
//     common: number;
//     beforeTax: number;
//   },
//   // discounts: IStaycationDiscountSchema[];
//   discounts: string
//   security: string[];
//   isListed: boolean;
//   isApproved: boolean;
// }
