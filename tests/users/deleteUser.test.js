const users = require('../fixtures/users')
const request = require('supertest')
const app = require('../../server/server')
const setUpDB = require('../fixtures/setUpDB')

beforeEach(setUpDB)

describe('deleting a user', () => {
  test('should delete user', async () => {
    const {
      tokens: [token],
      _id,
    } = users[0]
    const { status } = await request(app)
      .delete(`/api/user/${_id}`)
      .set('Authorization', `Bearer ${token}`)
      .send()
    expect(status).toBe(204)
  })

  test("shouldn't delete unauth user", async () => {
    const { _id } = users[0]
    const { status } = await request(app).delete(`/api/user/${_id}`).send()
    expect(status).toBe(401)
  })
})
