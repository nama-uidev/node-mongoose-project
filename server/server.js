var express = require("express");
var bodyParser = require("body-parser");

const mongoose = require("./db/mongoose");
const {
    user
} = require("./models/user-model");
const {
    Todo
} = require("./models/Todo-model");

var app = express();

app.use(bodyParser.json());

app.get("/todos", (req, res) => {
    user.find().then((users) => {
        res.send({
            users
        });
    }, (err) => {
        res.status(400).send(e);
    })
});

app.get("/todos/:todoId", (req, res) => {
    //res.send(req.params);
    Todo.find({
        _id: req.params.todoId
    }).then((todos) => {
        console.log(todos);
    })
});

app.listen(3000, () => {
    console.log("Started the app");
});

module.exports = {
    app
};