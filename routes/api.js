const express = require("express")
const app = express()

const AuthController = require("./../app/Http/Controllers/AuthController")
const UserController = require("./../app/Http/Controllers/UserController")

const LoginRules = require("../app/Http/Rules/Auth/LoginRules")
const Validator = require("../app/Http/Middleware/Validator")

app.get("/auth", AuthController.index)
app.post("/auth/login", [LoginRules, Validator], AuthController.login)

app.get("/get/user", UserController.getUsers)

module.exports = app
