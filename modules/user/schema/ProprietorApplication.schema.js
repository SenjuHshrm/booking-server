"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let propAppSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    staycationId: { type: mongoose_1.Types.ObjectId, ref: 'staycation' }
});
const ProprietorApplication = (0, mongoose_1.model)('proprietor-application', propAppSchema);
exports.default = ProprietorApplication;
