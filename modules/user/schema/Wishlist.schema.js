"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let wishListSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    staycation: { type: [mongoose_1.Types.ObjectId], ref: 'staycation' }
});
const Wishlist = (0, mongoose_1.model)('wishlist', wishListSchema);
exports.default = Wishlist;
