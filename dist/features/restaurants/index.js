"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurants = express_1.default.Router();
//connection
const data = [];
restaurants.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");
    data.push(res);
});
const run = () => {
    console.log("run", data.length);
    data.forEach((res) => {
        res.write("Something");
    });
    setTimeout(run, 5000);
};
setTimeout(run, 5000);
exports.default = restaurants;
//# sourceMappingURL=index.js.map