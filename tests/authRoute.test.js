const app = require('../server/server')
const request = require('supertest')
const setUpDB = require('./fixtures/setUpDB')
const users = require('./fixtures/users')

beforeEach(setUpDB)
const timeToWait = 20000

describe('checking auth', () => {
  test('should return status 200', async () => {
    const {
      tokens: [token],
    } = users[0]
    const { status } = await request(app).get('/api/auth').set('Authorization', token).send()
    expect(status).toBe(200)
}, timeToWait)

  test(
    'should return status 401',
    async () => {
    const { status } = await request(app).get('/api/auth').send()
      expect(status).toBe(401)
    },
    timeToWait
  )
})
