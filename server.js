const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

let mainArr = [];
let waitArr = [];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Ya sirve");
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

