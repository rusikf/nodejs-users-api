import 'regenerator-runtime/runtime'
import request from 'supertest'
import models from './models/index'

const createServer = require("./server")
const app = createServer()
const { User } = models

describe('Users API', function() {
  beforeAll(async () => {
    await models.sequelize.sync({ force: true })
  })

  afterAll(async () => {
    await models.sequelize.close()
  })

  const userEntity = ({ name }) => {
    return { id: expect.anything(), name }
  }

  describe('GET /users', function() {
    it('responds with json', async function() {
      await User.create({ name: 'J' })
      const response = await request(app).get('/users').expect(200)

      expect(response.body).toEqual([userEntity({ name: 'J' })])
    })
  })

  describe('POST /users', function() {
    it('responds with json', async function() {
      const response = await request(app)
        .post('/users')
        .set('Accept', 'application/json')
        .send({ name: 'John'})
        .expect(201)
      expect(response.body).toEqual(userEntity({ name: 'John' }))
    })

    it('respond with error if no name', async function() {
      const response = await request(app)
        .post('/users')
        .set('Accept', 'application/json')
        .expect(422)
      expect(response.body).toEqual({ errors: ['Name cannot be blank'] })
    })
  })

  describe('PATCH /users', function() {
    it('responds with json', async function() {
      const user = await User.create({ name: 'Updated' })

      const response = await request(app)
        .patch(`/users/${user.id}`)
        .set('Accept', 'application/json')
        .send({ name: 'John updated'})
        .expect(200)
      expect(response.body).toEqual(userEntity({ name: 'John updated' }))
    })

    it('responds with error if user not exist', async function() {
      await request(app)
        .patch(`/users/-1`)
        .send({ name: 'John updated'})
        .expect(404)
    })

    it('respond with error if no name', async function() {
      const user = await User.create({ name: 'Updated' })
      const response = await request(app)
        .patch(`/users/${user.id}`)
        .set('Accept', 'application/json')
        .expect(422)

      expect(response.body).toEqual({ errors: ['Name cannot be blank'] })
    })
  })

  describe('DELETE /users', function() {
    it('responds with json', async function() {
      const user = await User.create({ name: 'Deleted' })
      await request(app)
        .delete(`/users/${user.id}`)
        .expect(200)
    })

    it('return error if user not exist', async function() {
      await request(app)
        .delete(`/users/-1`)
        .expect(404)
    })
  })
})
