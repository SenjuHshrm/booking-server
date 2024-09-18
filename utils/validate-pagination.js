"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validatePaginationParams = (limit, page) => {
    const validatedLimit = limit && !isNaN(parseInt(limit, 10)) ? parseInt(limit, 10) : 10;
    const validatedPage = page && !isNaN(parseInt(page, 10)) ? parseInt(page, 10) : 1;
    const validatedOffset = (validatedPage - 1) * validatedLimit;
    return {
        limit: validatedLimit,
        offset: validatedOffset,
    };
};
exports.default = validatePaginationParams;
