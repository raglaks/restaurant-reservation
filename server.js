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
        //console.log(JSON.parse(data));
        mainArr = JSON.parse(data);
    } else {
        console.log("no hay data");
    }
    //var dataArr = data.split(",");
});

fs.readFile("waitArr.txt", "utf8", function (error, data) {
    if (error) {
        return console.log(error);
    }
    if (data) {
        //console.log(JSON.parse(data));
        waitArr = JSON.parse(data);
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

    console.log(newRes);

    if (mainArr.length >= 5) {

        waitArr.push(newRes);

        fs.writeFile(__dirname + "/waitArr.txt", JSON.stringify(waitArr), function (err, data) {

            if (err) throw err;

            console.log("updated WAIT LIST");
        });

    } else {

        mainArr.push(newRes);

        fs.writeFile(__dirname + "/mainArr.txt", JSON.stringify(mainArr), function (err, data) {

            if (err) throw err;

            console.log("updated MAIN");
        });

    }

    console.log(mainArr.length);
    console.log(waitArr.length);

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