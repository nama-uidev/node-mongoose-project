var express = require("express");
var bodyParser = require("body-parser");

const mongoose = require("./server/db/mongoose");
const {
    User
} = require("./server/models/user-model");
const {
    Todo
} = require("./server/models/Todo-model");

var app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    var TodoObj = new Todo({
        text: req.body.text
    });
    TodoObj.save().then((doc) => {
        console.log("Record saved succesfully");
        console.log(doc);
    }, (err) => {
        console.log("Record not saved succesfully");
    });
});

app.listen(3000, () => {
    console.log("Started the app");
});