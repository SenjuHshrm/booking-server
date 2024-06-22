"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = require("passport-jwt");
const passport_local_1 = require("passport-local");
const passport_1 = __importDefault(require("passport"));
const Auth_schema_1 = __importDefault(require("../modules/auth/schema/Auth.schema"));
const environment_config_1 = require("./environment.config");
let jwtOptions = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: environment_config_1.env.JWT_SECRET
};
let localOptions = {
    usernameField: 'email',
    passwordField: 'password',
};
passport_1.default.use('jwt', new passport_jwt_1.Strategy(jwtOptions, (payload, done) => {
    Auth_schema_1.default.findOne({ userId: payload.sub })
        .then((user) => {
        if (!user)
            return done(null, false);
        return done(null, user);
    })
        .catch((err) => {
        return done(err, false);
    });
}));
passport_1.default.use('local', new passport_local_1.Strategy(localOptions, (email, password, done) => {
    Auth_schema_1.default.findOne({ email })
        .then((auth) => {
        if (!auth)
            return done(null, false);
        if (!auth.compareHash(password))
            return done(null, false);
        return done(null, auth);
    })
        .catch((err) => {
        return done(err, false);
    });
}));
