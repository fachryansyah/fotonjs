require("dotenv").config();
const assert = require('assert');
const request = require('supertest');
const app = require('../server');

describe('Sample', () => {
  describe('#helloWorld()', () => {
    it('should be print hello world', (done) => {
      request(app)
        .get('/api/hello')
        .expect(200)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          assert.equal('hello world', res.body.data.message);
          done();
        });
    });
  });
});