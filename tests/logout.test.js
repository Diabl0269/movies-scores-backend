const request = require('supertest')
const users = require('./fixtures/users')
const setUpDB = require('./fixtures/setUpDB')
const app = require('../server/server')

beforeEach(setUpDB)
timeToWait = 20000

describe('logout', () => {
  test('should successfully logout', async () => {
    const {
      tokens: [token],
    } = users[0]
    const { status } = await request(app)
      .post('/api/logout')
      .set('Authorization', `Bearer ${token}`)
      .send({})

    expect(status).toEqual(200)
  })

  test('should retrun 401 for no token or expired', async () => {
    const { status } = await request(app).post('/api/logout').send()
    expect(status).toBe(401)
  })
})
