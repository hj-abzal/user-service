import express from "express";

const restaurants = express.Router();
//connection
const data: any[] = [];
restaurants.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");

    data.push(res);
});

const run = () => {
    console.log("run", data.length)
    data.forEach((res) => {
        res.write("Something");
    });
    setTimeout(run, 5000);
}

setTimeout(run, 5000);


export default restaurants;
