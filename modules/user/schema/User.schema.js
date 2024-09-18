"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const crypto_1 = require("crypto");
let FullName = new mongoose_1.Schema({
    fName: { type: String, required: true },
    mName: String,
    lName: { type: String, required: true },
    xName: String,
});
let UserDescription = new mongoose_1.Schema({
    description: String,
    hobbies: [String],
    work: String,
    favFood: String,
    favPlace: String,
});
let UserAddress = new mongoose_1.Schema({
    unit: String,
    street: String,
    brgy: String,
    city: String,
    province: String,
    country: String,
    zip: String,
});
let UserSchema = new mongoose_1.Schema({
    name: FullName,
    img: String,
    desc: UserDescription,
    address: UserAddress,
    contact: String,
    status: {
        type: String,
        required: true,
        enum: { values: ["active", "suspended", "terminated"] },
    },
    identificationStat: {
        type: String,
        required: true,
        enum: { values: ["pending", "approved", "disapproved"] },
    },
    suspendedUntil: String,
    approvedAsProprietorOn: String,
    paymentClientId: String,
}, {
    timestamps: true,
});
UserSchema.methods.setImg = function (img, email) {
    let md5 = (0, crypto_1.createHash)("md5").update(email).digest("hex");
    this.img = img !== "" ? img : `https://gravatar.com/avatar/${md5}?d=retro`;
};
const User = (0, mongoose_1.model)("user", UserSchema);
exports.default = User;
