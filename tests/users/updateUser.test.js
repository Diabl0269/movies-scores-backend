const users = require('../fixtures/users')
const request = require('supertest')
const app = require('../../server/server')
const setUpDB = require('../fixtures/setUpDB')

beforeEach(setUpDB)
const timeToWait = 20000

const {
  tokens: [token]
} = users[0]

describe('updating a user', () => {
  test(
    'should update user',
    async () => {
      const updateObj = {
        password: '11111111',
        email: 'update@update.com',
        firstName: 'firstU',
        lastName: 'lastU',
      }
      const {
        body: { userDetails },
        status,
      } = await request(app)
        .patch(`/api/user`)
        .set('Authorization', `Bearer ${token}`)
        .send(updateObj)
      delete updateObj.password
      expect(userDetails).toEqual(updateObj)
      expect(status).toBe(200)
    },
    timeToWait
  )

  test(
    'should not update user email to one which exists',
    async () => {
      const { status } = await request(app)
        .patch(`/api/user`)
        .set('Authorization', `Bearer ${token}`)
        .send({ email: 'test2@test2.com' })
      expect(status).toBe(409)
    },
    timeToWait
  )

  test(
    'should not update empty field',
    async () => {
      const { status } = await request(app)
        .patch(`/api/user`)
        .set('Authorization', `Bearer ${token}`)
        .send({ email: '' })
      expect(status).toBe(400)
    },
    timeToWait
  )
})
