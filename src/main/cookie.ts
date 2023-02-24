import cors from "cors";
import cookieParser from "cookie-parser";
import {Express} from "express";

export const cookie = (app: Express) => {

    const whitelist = ['http://localhost:3000', 'https://example2.com'];
    const corsOptions = cors({
        credentials: true,
        origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
            if(whitelist.includes(origin || ""))
                return callback(null, true)

            callback(new Error('Not allowed by CORS'));
            console.log("origin: ", origin);
            // callback(null, true); // everyone is allowed
        }
    });

    app.use(corsOptions);
    app.use(cookieParser());
};