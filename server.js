const express = require("express");
const path = require("path");
const fs = require("fs");
const Reservation = require("./reservation.js");

const app = express();
const PORT = 3050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let mainArr = [];
let waitArr = [];

fs.readFile("mainArr.txt", "utf8", function (error, data) {
    if (error) {
        return console.log(error);
    }
    if (data) {
        console.log(JSON.parse(data));
    } else {
        console.log("no hay data");
    }
    //var dataArr = data.split(",");
});



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/reserve", function (req, res) {
    var newRes = req.body;
    console.log(req.body);
    return res.json(newRes);
});

app.get("/tables/reserves", function (req, res) {
    return res.json(mainArr);
});

app.get("/tables/waiting", function (req, res) {
    return res.json(waitArr);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});