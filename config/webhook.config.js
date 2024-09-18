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
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhook = void 0;
const utils_1 = require("./../utils");
const environment_config_1 = require("./environment.config");
const mongoose_1 = require("mongoose");
const authBasic = `Basic ${Buffer.from(environment_config_1.env.PAYMONGO_SK + ':').toString('base64')}`;
const baseURL = `${environment_config_1.env.PAYMONGO_URL}/${environment_config_1.env.PAYMONGO_URL_VER}`;
const webhookURL = `${environment_config_1.env.HOST}/api/payment/post/payment-process`;
const webhookSchema = new mongoose_1.Schema({
    webhookId: String,
    webhookSecret: String,
    active: Boolean,
    url: String
});
const Webhook = (0, mongoose_1.model)('webhook', webhookSchema);
exports.default = Webhook;
// ======================================================== //
const createWebhook = (url) => __awaiter(void 0, void 0, void 0, function* () {
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
                        url,
                        events: [
                            'payment.paid',
                            'payment.failed',
                            'payment.refunded',
                            'payment.refund.updated'
                        ]
                    }
                }
            })
        };
        let req = yield fetch(`${baseURL}/webhooks`, opt);
        let res = yield req.json();
        yield new Webhook({ webhookId: res.data.id, webhookSecret: res.data.attributes.secret_key, active: res.data.attributes.status === 'enabled', url }).save();
    }
    catch (e) {
        (0, utils_1.logger)('createWebhook', 'config', e.message, 'CFG-WBHK-0001');
    }
});
const getWebhook = (webhookId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let opt = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: authBasic
            }
        };
        let req = yield fetch(`${baseURL}/webhooks/${webhookId}`, opt);
        let res = yield req.json();
        return res.data;
    }
    catch (e) {
        (0, utils_1.logger)('getWebhook', 'config', e.message, 'CFG-WBHK-0002');
    }
});
const updateWebhook = (webhookId, url, events) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let opt = {
            method: 'PUT',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: authBasic
            },
            body: JSON.stringify({
                data: {
                    attributes: {
                        url,
                        events
                    }
                }
            })
        };
        let req = yield fetch(`${baseURL}/webhooks/${webhookId}`, opt);
        let res = yield req.json();
        yield Webhook.findOneAndUpdate({ webhookId }, { $set: { url } }).exec();
    }
    catch (e) {
        (0, utils_1.logger)('updateWebhook', 'config', e.message, 'CFG-WBHK-0003');
    }
});
const webhook = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // let url = `${env.HOST}/api/payment/post/payment-process`
        let wh = yield Webhook.findOne({ active: true }).exec();
        if (!wh) {
            createWebhook(webhookURL);
            return;
        }
        let data = yield getWebhook(wh.webhookId);
        if (data.attributes.url !== webhookURL) {
            updateWebhook(wh.webhookId, webhookURL, data.attributes.events);
        }
    }
    catch (e) {
        (0, utils_1.logger)('webhook', 'config', e.message, 'CFG-WBHK-0004');
    }
});
exports.webhook = webhook;
