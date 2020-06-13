# FotonJS
The simple framework for building nodejs rest api with expressjs

## Installation
#### install foton-cli
``` bash
$ npm i -g foton-cli
```
#### creating project
``` bash
$ foton create --project <project-name>
```

## Manual
This boilerplate have a AuthServiceProvider for Manage authenticated user easily, like get authenticated user data, Atempt login, Logout authenticated user.

for example i want retrive authenticated user data, i just write code in the controller like this.
``` JavaScript
// import AuthServiceProvider
const Auth = require("../../Providers/AuthServiceProvider")

const UserController = {
    getProfile: async function(req, res) {

        // use the AuthServiceProvider
        const users = await Auth.user(req) // output should user data

        return res.json({
            "message" : "OKE!",
            "status" : 200,
            "data" : users
        })
    }
}
```

## Todo
- [x] Seperate route and handler
- [x] Env configuration
- [x] Database Connection
- [x] ORM integration
- [x] Middleware
- [x] Auth Service Provider
- [x] Auto Migrate Database
- [x] Database seeder
- [x] Unit Testing
- [x] Code generator Like artisan laravel
- [ ] Add Socket connection
- [ ] BREAD Sample
- [ ] End to end encryption connection
