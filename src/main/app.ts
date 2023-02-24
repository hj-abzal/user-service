import {Express, NextFunction, Request, Response} from "express";
import bodyParser from "body-parser";

export const appUse = (app: Express) => {
    app.use(bodyParser.json({limit: "7mb"}));
    app.use(bodyParser.urlencoded({limit: "7mb", extended: false}));

    // log middleware
    app.use((req: Request, res: Response, next: NextFunction) => {
        console.log("Time: ", new Date().toString());
        console.log("-----", req.method, req.url, "params:", req.params);
        console.log("query:", req.query);
        console.log("body:", req.body);
        console.log("cookies:", req.cookies);
        next();
    });
};
