"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = require("path");
const passport_1 = __importDefault(require("passport"));
const socket_io_1 = require("socket.io");
const http_1 = require("http");
const admin_ui_1 = require("@socket.io/admin-ui");
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const io_1 = require("./socket/io");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: config_1.env.ORIGIN,
        credentials: true
    }
});
const pubClient = (config_1.redisClient);
(0, io_1.IO)(io);
globalThis.appRoot = (0, path_1.resolve)(__dirname);
globalThis.io = io;
app.set('port', (0, config_1.port)(config_1.env.NODE_ENV));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json({ limit: '500mb' }));
app.use(express_1.default.urlencoded({ limit: '500mb', extended: true }));
app.use(express_1.default.static((0, path_1.join)(__dirname, 'uploads')));
app.use(express_1.default.static((0, path_1.join)(__dirname, 'app')));
app.use((0, cors_1.default)({
    origin: config_1.env.ORIGIN,
    allowedHeaders: ['Authorization', 'Content-Type'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(passport_1.default.initialize());
require("./config/passport.config");
app.use(middleware_1.header);
app.use('/api/', routes_1.Routes);
app.get('/*', (req, res) => {
    res.sendFile((0, path_1.join)(__dirname, '/app/index.html'));
});
httpServer.listen(app.get('port'), () => {
    (0, config_1.dbConfig)();
    pubClient.connect();
    config_1.redisClient.flushAll();
    // task(io)
    (0, admin_ui_1.instrument)(io, {
        auth: {
            type: 'basic',
            username: config_1.env.SIO_ADMIN_USERNAME,
            password: config_1.env.SIO_ADMIN_PASSWORD
        }
    });
    console.log(`App running on PORT ${app.get('port')}`);
});
