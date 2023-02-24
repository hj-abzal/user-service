import express from 'express';
import http from "http";
import {PORT} from "./main/config";
import {appUse} from "./main/app";
import {routes} from "./main/routes";

const app = express();
appUse(app);
routes(app);

const server = http.createServer(app);

const port = process.env.PORT || PORT;

server.listen(port, () => {
    console.log("Listening on port: " + port);
})


process.on("unhandledRejection", (reason, p) => {
    console.log("unhandledRejection: ", reason, p);
});
