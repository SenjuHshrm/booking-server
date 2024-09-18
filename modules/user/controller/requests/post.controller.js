"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const middleware_1 = require("./../../../../middleware");
const express_1 = require("express");
const user_service_1 = __importDefault(require("../../user.service"));
const passport_1 = __importDefault(require("passport"));
const middleware_2 = require("./../../../../middleware");
const postUserRoutes = (0, express_1.Router)()
    .post('/add', (req, res) => {
    return user_service_1.default.register(res, req.body);
})
    .post('/add/admin', passport_1.default.authenticate('jwt', { session: false }), middleware_1.profileImgStorageMedia.single('img'), (req, res) => {
    var _a;
    let user = {
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        password: req.body.password,
        imgFile: `/profile-img/${req.body.email}/${(_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname}`
    };
    return user_service_1.default.addAdmin(res, user);
})
    .post('/add-to-wishlist', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    return user_service_1.default.addToWishList(res, req.body.user, req.body.staycation);
})
    /**
     * Accepts form data
     *
     * fields:
     *
     * id: userId
     * type: Identification Type
     * idFront: Image File Front ID
     * idBack: Image FIle Back ID
     * idFrontFilename: Filename of Image Front ID
     * idBackFilename: Filename of Image Back ID
     */
    .post('/upload-verification', passport_1.default.authenticate('jwt', { session: false }), middleware_1.uploadUserVerification.fields([{ name: 'idFront', maxCount: 1 }, { name: 'idBack', maxCount: 1 }]), (req, res) => {
    let data = Object.assign(Object.assign({}, req.body), { idFront: `/user-verification/${req.body.id}/${req.body.idFrontFilename}`, idBack: `/user-verification/${req.body.id}/${req.body.idBackFilename}` });
    return user_service_1.default.uploadVerification(res, data);
})
    .post('/request-docs/:userId/:staycationId', passport_1.default.authenticate('jwt', { session: false }), (req, res) => {
    return user_service_1.default.requestSupportingDocs(res, req.params.userId, req.params.staycationId, req.body.date);
})
    .post('/upload-docs/:id', middleware_2.uploadSupportingDocs.fields([{ name: 'docs' }]), (req, res) => {
    let docsArr = JSON.parse(req.body.documents);
    let docs = {
        staycationId: req.body.staycationId,
        docs: docsArr.map((d) => `/docs/${req.params.id}/${d}`)
    };
    return user_service_1.default.updatePropApplication(res, req.params.id, docs);
});
exports.default = postUserRoutes;
