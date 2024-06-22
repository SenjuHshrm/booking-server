"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomPassword = void 0;
const alphaNumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+<>?';
const randomPassword = () => {
    let ln = alphaNumeric.length;
    let res = '';
    for (let i = 0; i < 10; i++) {
        res += alphaNumeric.charAt(Math.floor(Math.random() * ln));
    }
    return res;
};
exports.randomPassword = randomPassword;
