"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const global_static_interface_1 = require("../global-static.interface");
let GlobalStaticSchema = new mongoose_1.Schema({
    type: { type: String, enum: { values: Object.keys(global_static_interface_1.EStaticType) } },
    values: [mongoose_1.Schema.Types.Mixed]
});
const GlobalStatic = (0, mongoose_1.model)('global-static', GlobalStaticSchema);
exports.default = GlobalStatic;
