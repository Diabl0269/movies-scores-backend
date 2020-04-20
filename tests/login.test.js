const request = require('supertest')
const users = require('./fixtures/users')
const setUpDB = require('./fixtures/setUpDB')
const app = require('../server/server')

beforeEach(setUpDB)
timeToWait = 20000

const { email, password, firstName, lastName, _id } = users[0]

describe('login', () => {
  test('should successfully login', async () => {
    const { body: user } = await request(app).post('/api/login').send({ email, password })
    user0 = {
      _id: _id.toString(),
      __v: 1,
      userDetails: { email, firstName, lastName },
      tokens: [0],
      scoredMovies: [],
    }
    user.tokens = user.tokens.map((t, i) => i)
    expect(user).toEqual(user0)
  })

  test('should retrun 401 for wrong detail', async () => {
    const { status } = await request(app).post('/api/login').send({ email, password: 1234567 })
    expect(status).toBe(401)
  })
})
