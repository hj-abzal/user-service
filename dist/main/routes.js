"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const config_1 = require("./config");
const restaurants_1 = __importDefault(require("../features/restaurants"));
const routes = (app) => {
    app.use(config_1.VERSION_1_0 + "/restaurants/:id", restaurants_1.default);
    // ping endpoint
    app.use(config_1.VERSION_1_0 + "/ping", (req, res) => {
        // save statistic
        const backTime = new Date().getTime();
        const frontTime = +req.body.frontTime || (req.query.frontTime && +req.query.frontTime) || (backTime + 1);
        const ping = backTime - frontTime;
        console.warn("!!! PING: ", ping); // need log always
        res.status(200).json({
            ping,
            backTime,
            frontTime: frontTime > backTime ? "---" : frontTime,
            info: "please send me you time"
        });
    });
    // default
    app.use((req, res) => {
        console.log("bad url: ", req.method, req.url);
        res.status(404).json({
            error: "bad url",
            method: req.method,
            url: req.url,
            query: req.query,
            body: req.body,
        });
    });
};
exports.routes = routes;
//# sourceMappingURL=routes.js.map