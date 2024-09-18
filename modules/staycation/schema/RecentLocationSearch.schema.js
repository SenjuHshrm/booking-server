"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
let recentLocSearchSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'user' },
    recentSearches: [String]
});
const RecentLocationSearch = (0, mongoose_1.model)('recent-loc-search', recentLocSearchSchema);
exports.default = RecentLocationSearch;
