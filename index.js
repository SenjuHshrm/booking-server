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
const redis_adapter_1 = require("@socket.io/redis-adapter");
const http_1 = require("http");
const admin_ui_1 = require("@socket.io/admin-ui");
const tasks_1 = require("./tasks");
const config_1 = require("./config");
const middleware_1 = require("./middleware");
const io_1 = __importDefault(require("./socket/io"));
const routes_1 = require("./routes");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: config_1.env.ORIGIN,
        credentials: true
    },
    maxHttpBufferSize: 1e8
});
const pubClient = (config_1.redisClient);
const subClient = pubClient.duplicate();
Promise.all([pubClient.connect(), subClient.connect()]).then(() => {
    io.adapter((0, redis_adapter_1.createAdapter)(pubClient, subClient));
});
(0, io_1.default)(io);
globalThis.appRoot = (0, path_1.resolve)(__dirname);
globalThis.io = io;
const bodyParser = express_1.default.json({ limit: '500mb' });
app.set('port', (0, config_1.port)(config_1.env.NODE_ENV));
app.use((0, morgan_1.default)('dev'));
app.use(bodyParser);
app.use(express_1.default.urlencoded({ limit: '500mb', extended: false }));
app.use(express_1.default.static((0, path_1.join)(__dirname, 'uploads')));
app.use(express_1.default.static((0, path_1.join)(__dirname, 'app')));
app.use((0, cors_1.default)({
    origin: config_1.env.ORIGIN,
    allowedHeaders: ['Authorization', 'Content-Type', config_1.env.CSRF_HEADER_NAME],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
// let getSec: CsrfSecretRetriever = <CsrfSecretRetriever>((req: Request) => req.secret)
// const { invalidCsrfTokenError, generateToken, validateRequest, doubleCsrfProtection } = doubleCsrf({
//   getSecret: getSec,
//   // secret: env.CSRF_SECRET,
//   cookieName: env.CSRF_COOKIE_NAME,
//   cookieOptions: { sameSite: true, secure: true, signed: true },
//   ignoredMethods: [ "GET", "HEAD", "OPTIONS" ],
//   getTokenFromRequest: (req: Request) => <string>req.headers[env.CSRF_COOKIE_NAME]
// })
app.use(passport_1.default.initialize());
require("./config/passport.config");
(0, tasks_1.checkBookingArrivals)();
app.use((0, cookie_parser_1.default)(config_1.env.COOKIE_SECRET));
app.use(middleware_1.header);
app.all('*', bodyParser, (req, res, next) => {
    console.log('req.secret: ', req.secret, '\n', 'req.path: ', req.path, '\n', 'req.headers: ', req.headers, '\n', 'req.body: ', req.body);
    next();
});
app.get('/token', (req, res) => {
    // res.setHeader('Set-Cookie', `${env.CSRF_COOKIE_NAME}=${csrf.generateToken(req, res)}; Path=/; SameSite=None; Domain=localhost:3000`)
    // csrf.generateToken(req, res, true, true)
    let token = config_1.csrf.generateToken(req, res);
    // res.cookie(env.CSRF_COOKIE_NAME, token, { secure: true, httpOnly: false, sameSite: 'none', domain: 'localhost' })
    res.json({
        token
    });
});
app.use('/api/', routes_1.Routes);
app.get('/*', (req, res) => {
    res.sendFile((0, path_1.join)(__dirname, '/app/index.html'));
});
httpServer.listen(app.get('port'), () => {
    (0, config_1.dbConfig)();
    // pubClient.connect()
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
