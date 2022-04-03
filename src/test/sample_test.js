require("dotenv").config();
import { equal } from "assert";
import request from "supertest";
import app from "../server";

describe("Sample", () => {
    describe("#helloWorld()", () => {
        it("should be print hello world", (done) => {
            request(app)
                .get("/api/hello")
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    equal("hello world", res.body.data.message);
                    done();
                });
        });
    });
});
