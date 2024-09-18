"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middleware_1 = require("./../../../../middleware");
const express_1 = require("express");
const user_service_1 = __importDefault(require("../../user.service"));
const putUserRoutes = (0, express_1.Router)()
    .put("/set-as-host/:propAppId", (req, res) => {
    return user_service_1.default.setAsProprietor(res, req.body.userId, req.body.staycationId, req.params.propAppId);
})
    .put("/update-profile/:id", middleware_1.profileImgStorageMedia.single("img"), (req, res) => {
    var _a;
    let { body } = req;
    let data = {
        name: {
            fName: body.fName,
            mName: body.mName,
            lName: body.lName,
            xName: body.xName,
        },
        contact: body.contact,
        desc: {
            description: body.desc,
            hobbies: body.hobbies,
            work: body.work,
            favFood: body.favFood,
            favPlace: body.favPlace,
        },
        img: req.file
            ? `/profile-img/${body.email}/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname}`
            : req.body.img,
    };
    return user_service_1.default.updateUserProfile(res, data, req.params.id);
})
    .put("/verification/update-profile/:id", (req, res) => {
    return user_service_1.default.verificationUpdateProfile(res, req.body, req.params.id);
})
    .put('/update-user-verification/:id', (req, res) => {
    return user_service_1.default.setUserVerificationStatus(res, req.params.id, req.body.status);
});
exports.default = putUserRoutes;
