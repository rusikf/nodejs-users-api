const createServer = require("./server")
const app = createServer()
const request = require('supertest');
import fs from 'fs'

jest.mock('fs')

const user = { id: 3, name: 'Abby' }

fs.readFileSync.mockReturnValue(JSON.stringify([user]))
fs.writeFileSync.mockReturnValue()

describe('GET /users', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /users', function() {
  it('responds with json', function() {
    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send({ id: 33, name: 'John'})
      .expect(200)
  });
});

describe('PATCH /users', function() {
  it('responds with json', function() {
    request(app)
      .patch('/users/33')
      .send({ name: 'John updated'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  });
});

describe('DELETE /users', function() {
  it('responds with json', function() {
    request(app)
      .delete(`/users/${user.id}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  });
});
