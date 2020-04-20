const users = require('../fixtures/users')
const request = require('supertest')
const app = require('../../server/server')
const setUpDB = require('../fixtures/setUpDB')

const {
  tokens: [token],
  _id,
  email,
  firstName,
  lastName,
  scoredMovies,
} = users[0]
beforeEach(setUpDB)
const timeToWait = 20000

describe('getting a user', () => {
  test(
    "shouldn't get unauth user",
    async () => {
      const { status } = await request(app).get(`/api/user`).send()
      expect(status).toBe(401)
    },
    timeToWait
  )

  test(
    'should get user',
    async () => {
      const { body: user } = await request(app)
        .get(`/api/user`)
        .set('Authorization', `Bearer ${token}`)
        .send()
      const userFix = {
        _id: _id.toString(),
        scoredMovies,
        tokens: [],
        userDetails: { email, firstName, lastName },
        __v: 0,
      }
      expect(user).toEqual(userFix)
    },
    timeToWait
  )
})
