const users = require('../fixtures/users')
const request = require('supertest')
const app = require('../../server/server')
const setUpDB = require('../fixtures/setUpDB')

const jwtRegex = new RegExp(({ jwt } = require('../../data/regexs.json')))

beforeEach(setUpDB)
const timeToWait = 20000

describe('adding a user', () => {
  test(
    'should add user and return token',
    async () => {
      const {
        body: {tokens: [token]},
        status,
      } = await request(app).post('/api/users').send(users[1])

      expect(token).toMatch(jwtRegex)
      expect(status).toBe(201)
    },
    timeToWait
  )

  test(
    'should not add user which allready exists',
    async () => {
      const { status } = await request(app).post('/api/users').send(users[0])
      expect(status).toBe(409)
    },
    timeToWait
  )

  test(
    'should not add empty user',
    async () => {
      const { status } = await request(app).post('/api/users').send({})
      expect(status).toBe(400)
    },
    timeToWait
  )
})
