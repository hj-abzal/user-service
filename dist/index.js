"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const config_1 = require("./main/config");
const app_1 = require("./main/app");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
(0, app_1.appUse)(app);
// routes(app);
const server = http_1.default.createServer(app);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
const io = new socket_io_1.Server(server);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.broadcast.emit('hi');
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets
const port = process.env.PORT || config_1.PORT;
server.listen(port, () => {
    console.log("Listening on port: " + port);
});
process.on("unhandledRejection", (reason, p) => {
    console.log("unhandledRejection: ", reason, p);
});
//# sourceMappingURL=index.js.map