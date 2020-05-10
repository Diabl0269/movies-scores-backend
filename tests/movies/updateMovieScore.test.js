const app = require('../../server/server')
const request = require('supertest')
const users = require('../fixtures/users')
const setUpDB = require('../fixtures/setUpDB')
const [movieWithoutScore, movieWithScore] = require('../fixtures/movies')

const {
  tokens: [token]
} = users[0]

beforeEach(setUpDB)

describe("update a movie's score", () => {
  test('should add a score to none-scored movie', async () => {
    const { body } = await request(app)
      .patch('/api/movie-score')
      .set('Authorization', `Bearer ${token}`)
      .send({ movie: movieWithoutScore, score: 5 })

    expect(body).toEqual({ average: 5, count: 1 })
  })

  test("should update a movie's score", async () => {
    const { body } = await request(app)
      .patch('/api/movie-score')
      .set('Authorization', `Bearer ${token}`)
      .send({ movie: movieWithScore, score: 3 })

    expect(body).toEqual({ average: 6, count: 3 })
  })

  test('should not update negative number', async () => {
    const { status } = await request(app)
      .patch('/api/movie-score')
      .set('Authorization', `Bearer ${token}`)
      .send({ movie: movieWithScore, score: -1 })

    expect(status).toBe(400)
  })
})
