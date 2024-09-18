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
const User_schema_1 = __importDefault(require("./../user/schema/User.schema"));
const PaymentMethod_schema_1 = __importDefault(require("./schema/PaymentMethod.schema"));
const utils_1 = require("./../../utils");
const config_1 = require("./../../config");
const Transaction_schema_1 = __importDefault(require("./schema/Transaction.schema"));
const moment_1 = __importDefault(require("moment"));
const authBasic = `Basic ${Buffer.from(config_1.env.PAYMONGO_SK + ':').toString('base64')}`;
const baseURL = `${config_1.env.PAYMONGO_URL}/${config_1.env.PAYMONGO_URL_VER}`;
let addCustomer = (userId, data, contact) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let opt = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: authBasic
            },
            body: JSON.stringify({
                data: {
                    attributes: {
                        first_name: data.fName,
                        last_name: data.lName,
                        phone: contact,
                        email: data.email,
                        default_device: 'email'
                    }
                }
            })
        };
        let req = yield fetch(`${baseURL}/customers`, opt);
        let res = yield req.json();
        // new Payment({
        //   userId,
        //   clientId: res.data.id
        // }).save()
        yield User_schema_1.default.findOneAndUpdate({ _id: userId }, { $set: { paymentClientId: res.data.id } }).exec();
    }
    catch (e) {
        (0, utils_1.logger)('payment.controller', 'addCustomer', e.message, 'PYMT-0001');
    }
});
let getCustomerPaymentMethod = (res, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let opt = {
        //   method: 'GET',
        //   headers: {
        //     accept: 'application/json',
        //     authorization: authBasic
        //   }
        // }
        // let payment: IPaymentSchema = <IPaymentSchema>(await Payment.findOne({ userId }).exec())
        // let req = await fetch(`${baseURL}/customers/${payment.clientId}/payment_methods`, opt)
        // let resp = await req.json()
        // return res.status(200).json(resp)
        let piList = (yield PaymentMethod_schema_1.default.find({ user }).exec());
        return res.status(200).json(piList);
    }
    catch (e) {
        (0, utils_1.logger)('payment.controller', 'getCustomerPaymentMethod', e.message, 'PYMT-0002');
        return res.status(500).json({ code: 'PYMT-0002' });
    }
});
let getMerchantPaymentMethods = (res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let opt = {
        //   method: 'GET',
        //   headers: {
        //     accept: 'application/json',
        //     authorization: authBasic
        //   }
        // }
        // let req = await fetch(`${baseURL}/merchants/capabilities/payment_methods`, opt)
        // let resp = await req.json()
        let resp = config_1.env.PAYMONGO_PAYMENT_METHODS;
        return res.status(200).json(resp);
    }
    catch (e) {
        (0, utils_1.logger)('payment.controller', 'getMerchantPaymentMethods', e.message, 'PYMT-0003');
        return res.status(500).json({ code: 'PYMT-0003' });
    }
});
let createPaymentIntent = (res, data, a) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(data.amount * 100);
        let auth = a;
        let user = (yield User_schema_1.default.findById(auth.userId).exec());
        let opt = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: authBasic
            },
            body: JSON.stringify({
                data: {
                    attributes: {
                        amount: data.amount * 100,
                        payment_method_allowed: [data.paymentType],
                        payment_method_options: (data.paymentType === 'card') ? {
                            card: {
                                request_three_d_secure: 'any'
                            }
                        } : null,
                        currency: 'PHP',
                        capture_type: 'automatic',
                        // setup_future_usage: { session_type: 'on_session', customer_id: user.paymentClientId },
                        description: `Booking ${data.staycationId}`,
                        statement_descriptor: `Request booking of user ${user.id} for staycation ${data.staycationId}`,
                        metadata: {
                            userId: user.id,
                            staycationId: data.staycationId
                        }
                    }
                }
            })
        };
        let reqt = yield fetch(`${baseURL}/payment_intents`, opt);
        let resp = yield reqt.json();
        console.log(resp);
        new Transaction_schema_1.default({
            userId: user.id,
            staycationId: data.staycationId,
            piId: resp.data.id,
            amount: data.amount,
            paymentType: data.paymentOption,
            remainingBal: data.remainingBal,
            remainingBalDue: (data.remainingBalDue !== '') ? (0, moment_1.default)(data.remainingBalDue, "MMMM DD, YYYY").format('MM/DD/YYYY') : '',
            clientKey: resp.data.attributes.client_key,
            status: resp.data.attributes.status,
            checkoutURL: ''
        }).save();
        return res.status(201).json(resp);
    }
    catch (e) {
        (0, utils_1.logger)('payment.controller', 'createPaymentIntent', e.message, 'PYMT-0004');
        return res.status(500).json({ code: 'PYMT-0004' });
    }
});
let attachToPaymentIntent = (res, data, piId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let trn: ITransactionSchema = <ITransactionSchema>(await Transaction.findOne({ piId }).exec())
        // let opt = {
        //   method: 'POST',
        //   headers: {
        //     accept: 'application/json',
        //     'content-type': 'application/json',
        //     authorization: authBasic
        //   },
        //   body: JSON.stringify({
        //     data: {
        //       attributes: {
        //         payment_method: data.id,
        //         client_key: trn.clientKey,
        //         return_url: `${env.HOST}`
        //       }
        //     }
        //   })
        // }
        // let reqt = await fetch(`${baseURL}/payment_intents/${piId}/attach`, opt)
        // let resp = await reqt.json()
        // console.log(resp)
        // trn.checkoutURL = resp.data.attributes.next_action.redirect.url
        // trn.status = resp.data.attributes.status
        // trn.save()
        // new Booking({
        //   initiatedBy: trn.userId,
        //   bookTo: trn.staycationId,
        //   arrivalDate: data.checkInDate,
        //   transactionId: trn.id,
        //   isCancelled: false,
        //   cancellationPolicy: data.cancellationPolicy,
        //   isApproved: (data.bookingProcess === 'for_approval') ? false : true
        // }).save()
        // return res.status(200).json(resp)
        return res.status(200).json({});
    }
    catch (e) {
        (0, utils_1.logger)('payment.controller', 'attachToPaymentIntent', e.message, 'PYMT-0005');
        return res.status(500).json({ code: 'PYMT-0005' });
    }
});
let savePaymentMethodId = (res, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        new PaymentMethod_schema_1.default({ user: data.userId, pmId: data.pmId, isDefault: false }).save();
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('payment.controller', 'savePaymentMethodId', e.message, 'PYMT-0006');
        return res.status(500).json({ code: 'PYMT-0006' });
    }
});
let setAsDefaultPaymentMethod = (res, userId, pmId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield PaymentMethod_schema_1.default.updateMany({ user: userId }, { $set: { isDefault: false } }).exec();
        yield PaymentMethod_schema_1.default.findByIdAndUpdate(pmId, { $set: { isDefault: true } }).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('payment.controller', 'setAsDefaultPaymentMethod', e.message, 'PYMT-0007');
        return res.status(500).json({ code: 'PYMT-0007' });
    }
});
let removePaymentMethod = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield PaymentMethod_schema_1.default.findByIdAndDelete(id).exec();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('payment.controller', 'setAsDefaultPaymentMethod', e.message, 'PYMT-0008');
        return res.status(500).json({ code: 'PYMT-0008' });
    }
});
const PaymentService = {
    addCustomer,
    getCustomerPaymentMethod,
    getMerchantPaymentMethods,
    createPaymentIntent,
    attachToPaymentIntent,
    savePaymentMethodId,
    setAsDefaultPaymentMethod,
    removePaymentMethod
};
exports.default = PaymentService;
