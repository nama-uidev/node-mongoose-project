const expect = require("expect");
const supertest = require("supertest");

const {
    app
} = require("../server");

const {
    todo
} = require("../models/Todo-model");

describe("POST/todos", () => {
    it("test case should fail because of invalid data", (done) => {
        supertest(app)
            .post("/todos")
            .send({})
            .expect(200)
            .end(function (err, res) {
                console.log(res);
                if (err) {
                    return done(err);
                }
            });
        done();
    });
});