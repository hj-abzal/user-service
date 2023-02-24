import express from 'express';
import http from "http";
import {PORT} from "./main/config";
import {appUse} from "./main/app";
import {routes} from "./main/routes";
import {Server} from "socket.io";

const app = express();
appUse(app);
// routes(app);

const server = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


const io = new Server(server);
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



const port = process.env.PORT || PORT;

server.listen(port, () => {
    console.log("Listening on port: " + port);
})


process.on("unhandledRejection", (reason, p) => {
    console.log("unhandledRejection: ", reason, p);
});
