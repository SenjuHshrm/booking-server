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
const Payment_schema_1 = __importDefault(require("./schema/Payment.schema"));
const utils_1 = require("./../../utils");
let addPayment = (res, payment) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield new Payment_schema_1.default(payment).save();
        return res.sendStatus(201);
    }
    catch (e) {
        (0, utils_1.logger)('payment.controller', 'addPayment', e.message, 'PYM-0001');
        return res.status(500).json({ code: 'PYM-0001' });
    }
});
let getPaymentList = (res, userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let list = (yield Payment_schema_1.default.find({ userId }).exec());
        let resp = list.map((p) => {
            return {
                _id: p.id,
                paymentType: p.paymentType,
                userId: p.userId.toString(),
                name: p.name,
                bankName: p.bankName,
                acctNum: (p.acctNum) ? (0, utils_1.decrypt)(p.acctNum) : '',
                cardNum: (p.cardNum) ? (0, utils_1.decrypt)(p.cardNum) : '',
                cvv: (p.cvv) ? (0, utils_1.decrypt)(p.cvv) : '',
                createdAt: p.toJSON().createdAt,
                updatedAt: p.toJSON().updatedAt
            };
        });
        return res.status(200).json(resp);
    }
    catch (e) {
        (0, utils_1.logger)('payment.controller', 'getPaymentList', e.message, 'PYM-0002');
        return res.status(500).json({ code: 'PYM-0002' });
    }
});
let getPaymentDetails = (res, _id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let details = (yield Payment_schema_1.default.findById(_id).exec());
        details.acctNum = (details.acctNum) ? (0, utils_1.decrypt)(details.acctNum) : '';
        details.cardNum = (details.cardNum) ? (0, utils_1.decrypt)(details.cardNum) : '';
        details.cvv = (details.cvv) ? (0, utils_1.decrypt)(details.cvv) : '';
        return res.status(200).json(details);
    }
    catch (e) {
        (0, utils_1.logger)('payment.controller', 'getPaymentDetails', e.message, 'PYM-0003');
        return res.status(500).json({ code: 'PYM-0003' });
    }
});
let updatePaymentDetails = (res, _id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Payment_schema_1.default.findByIdAndUpdate(_id, { $set: Object.assign({}, data) }).exec();
        return res.sendStatus(200);
    }
    catch (e) {
        (0, utils_1.logger)('payment.controller', 'updatePaymentDetails', e.message, 'PYM-0004');
        return res.status(500).json({ code: 'PYM-0004' });
    }
});
let removePaymentMethod = (res, _id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Payment_schema_1.default.findByIdAndDelete(_id).exec();
        return res.sendStatus(200);
    }
    catch (e) {
        (0, utils_1.logger)('payment.controller', 'removePaymentMethod', e.message, 'PYM-0005');
        return res.status(500).json({ code: 'PYM-0005' });
    }
});
const PaymentService = {
    addPayment,
    getPaymentList,
    getPaymentDetails,
    updatePaymentDetails,
    removePaymentMethod
};
exports.default = PaymentService;
