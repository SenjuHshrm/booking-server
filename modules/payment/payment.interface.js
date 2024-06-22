"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EPaymentType = void 0;
var EPaymentType;
(function (EPaymentType) {
    EPaymentType[EPaymentType["ewallet"] = 0] = "ewallet";
    EPaymentType[EPaymentType["debit"] = 1] = "debit";
    EPaymentType[EPaymentType["credit"] = 2] = "credit";
    EPaymentType[EPaymentType["bank"] = 3] = "bank";
})(EPaymentType || (exports.EPaymentType = EPaymentType = {}));
