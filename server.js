const express = require("express");
const path = require("path");
const fs = require("fs");
const Reservation = require("./reservation.js");

const app = express();
const PORT = 3000;

let mainArr = [];
let waitArr = [];

fs.readFile("mainArr.txt", "utf8", function (error, data) {
    if (error) {
        return console.log(error);
    }
    if (data) {
        console.log(data);
    } else {
        console.log("no hay data");
    }
    //var dataArr = data.split(",");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Ya sirve");
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

