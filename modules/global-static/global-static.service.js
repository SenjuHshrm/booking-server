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
const GlobalStatic_schema_1 = __importDefault(require("./schema/GlobalStatic.schema"));
const utils_1 = require("./../../utils");
let addStatic = (res, type, values) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let statics = (yield GlobalStatic_schema_1.default.findOne({ type }).exec());
        if (!statics) {
            new GlobalStatic_schema_1.default({ type, values: [...values] }).save();
        }
        else {
            values.forEach((i) => {
                statics.values.push(i);
            });
            statics.markModified('values');
            statics.save();
        }
        return res.status(201).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('global-static.controller', 'addStatic', e.message, 'GST-0001');
        return res.status(500).json({ code: 'GST-0001' });
    }
});
let getStatic = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let statics = (yield GlobalStatic_schema_1.default.findById(id).exec());
        return res.status(200).json({ data: statics.values });
    }
    catch (e) {
        (0, utils_1.logger)('global-static.controller', 'getStatic', e.messsage, 'GST-0002');
        return res.status(500).json({ code: 'GST-0002' });
    }
});
let updateStatic = (res, id, values) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield GlobalStatic_schema_1.default.findByIdAndUpdate(id, { $set: { values } }).exec();
        return res.sendStatus(200);
    }
    catch (e) {
        (0, utils_1.logger)('global-static.controller', 'updateStatic', e.message, 'GST-0003');
        return res.status(500).json({ code: 'GST-0003' });
    }
});
let deleteStatic = (res, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield GlobalStatic_schema_1.default.findByIdAndDelete(id).exec();
        return res.sendStatus(200);
    }
    catch (e) {
        (0, utils_1.logger)('global-static.controller', 'deleteStatic', e.message, 'GST-0004');
        return res.status(500).json({ code: 'GST-0004' });
    }
});
let getStaticByType = (res, type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let statics = (yield GlobalStatic_schema_1.default.findOne({ type }).exec());
        console.log(statics);
        if (!statics) {
            let gs = yield new GlobalStatic_schema_1.default({ type, values: [] }).save();
            return res.status(200).json({ data: gs.values });
        }
        return res.status(200).json({ data: statics.values });
    }
    catch (e) {
        (0, utils_1.logger)('global-static.controller', 'getStaticByType', e.message, 'GST-0005');
        return res.status(500).json({ code: 'GST-0005' });
    }
});
let deleteValueFromStatic = (res, type, val) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let s = (yield GlobalStatic_schema_1.default.findOne({ type }).exec());
        s.values = s.values.filter((v) => JSON.stringify(v) !== JSON.stringify(val));
        s.markModified('values');
        s.save();
        return res.status(200).json({ success: true });
    }
    catch (e) {
        (0, utils_1.logger)('global-static.controller', 'deleteValueFromStatic', e.message, 'GST-0006');
        return res.status(500).json({ code: 'GST-0006' });
    }
});
const GlobalStaticService = {
    addStatic,
    getStatic,
    updateStatic,
    deleteStatic,
    getStaticByType,
    deleteValueFromStatic
};
exports.default = GlobalStaticService;
