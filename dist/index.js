"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const config_1 = require("./main/config");
const app_1 = require("./main/app");
const routes_1 = require("./main/routes");
const app = (0, express_1.default)();
(0, app_1.appUse)(app);
(0, routes_1.routes)(app);
const server = http_1.default.createServer(app);
const port = process.env.PORT || config_1.PORT;
server.listen(port, () => {
    console.log("Listening on port: " + port);
});
process.on("unhandledRejection", (reason, p) => {
    console.log("unhandledRejection: ", reason, p);
});
//# sourceMappingURL=index.js.map