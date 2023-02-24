import {Express, Request, Response} from "express";
import {VERSION_1_0} from "./config";
import restaurants from "../features/restaurants";

export const routes = (app: Express) => {
    app.use(VERSION_1_0 + "/restaurants/:id", restaurants);

    // ping endpoint
    app.use(VERSION_1_0 + "/ping", (req: Request, res: Response) => {
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
    app.use((req: Request, res: Response) => {
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
