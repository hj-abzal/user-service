"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookie = void 0;
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cookie = (app) => {
    const whitelist = ['http://localhost:3000', 'https://example2.com'];
    const corsOptions = (0, cors_1.default)({
        credentials: true,
        origin: (origin, callback) => {
            if (whitelist.includes(origin || ""))
                return callback(null, true);
            callback(new Error('Not allowed by CORS'));
            console.log("origin: ", origin);
            // callback(null, true); // everyone is allowed
        }
    });
    app.use(corsOptions);
    app.use((0, cookie_parser_1.default)());
};
exports.cookie = cookie;
//# sourceMappingURL=cookie.js.map