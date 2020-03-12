require("dotenv").config()
const assert = require('assert')
const axios = require('axios')
const configTesting = require('./testing_config')
const BASE_URL = process.env.TESTING_URL

describe('AuthTest', () => {
    describe('#login()', () => {
        it('should can login', (done) => {
            axios.post(BASE_URL + "/api/auth/login", {
                username: 'testing_account',
                password: '123456'
            }).then((res) => {
                console.log(res.data.message)
                configTesting.apiKeyTesting = res.data.data.apiKey
                assert.equal(res.data.code, 201)
                done()
            }).catch(done)
        })
    })
})