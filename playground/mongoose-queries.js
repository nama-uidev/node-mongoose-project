const mongoose = require("../server/db/mongoose");
const {
    user
} = require("../server/models/user-model");
const {
    Todo
} = require("../server/models/Todo-model");

var id = "5e0a34793337670f1c101582";

Todo.find({
    _id: id
}).then((todos) => {
    console.log(todos);
});

Todo.findById(id).then((todos) => {
    console.log(todos);
});

Todo.findOne({
    _id: id
}).then((todos) => {
    console.log(todos);
});