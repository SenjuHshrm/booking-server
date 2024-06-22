"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const environment_config_1 = require("./environment.config");
const User_schema_1 = __importDefault(require("./../modules/user/schema/User.schema"));
const Auth_schema_1 = __importDefault(require("./../modules/auth/schema/Auth.schema"));
const dbConfig = () => {
    mongoose_1.default.connect(environment_config_1.env.MONGODB_URI, {
        auth: {
            username: environment_config_1.env.MONGODB_USER,
            password: environment_config_1.env.MONGODB_PASS
        },
        dbName: environment_config_1.env.MONGODB_NAME
    }).then(() => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`Connected to Database ${environment_config_1.env.MONGODB_NAME}`);
        let admin = (yield Auth_schema_1.default.findOne({ email: environment_config_1.env.ADMIN_EMAIL }).exec());
        if (!admin) {
            let u = new User_schema_1.default({
                name: {
                    fName: environment_config_1.env.ADMIN_FIRSTNAME,
                    mName: environment_config_1.env.ADMIN_MIDDLENAME,
                    lName: environment_config_1.env.ADMIN_LASTNAME,
                    xName: environment_config_1.env.ADMIN_EXTNAME
                },
                img: environment_config_1.env.ADMIN_IMG,
                address: environment_config_1.env.ADMIN_ADDRESS,
                status: 'active',
                identificationStat: 'approved'
            });
            u.setImg(environment_config_1.env.ADMIN_IMG, environment_config_1.env.ADMIN_EMAIL);
            u.save().then((user) => {
                let auth = new Auth_schema_1.default({
                    userId: user.id,
                    email: environment_config_1.env.ADMIN_EMAIL,
                    access: ['admin']
                });
                auth.generateHash(environment_config_1.env.ADMIN_PASS);
                auth.save();
            });
        }
    })).catch((e) => {
        console.log('Unable to connect to Database');
        console.error(e);
    });
};
exports.dbConfig = dbConfig;
