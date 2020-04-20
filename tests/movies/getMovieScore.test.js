const request = require('supertest')
const app = require('../../server/server')
const moviesScores = require('../fixtures/moviesScores')
const setUpDB = require('../fixtures/setUpDB')

beforeEach(setUpDB)

test(
  "get a movie's score",
  async () => {
    const { name } = moviesScores[1]
    const anticipatedObj = { average: 7.5, count: 2 }
    const { body: averageScoreObj } = await request(app).get(`/api/movie-score/${name}`).send()
    expect(averageScoreObj).toEqual(anticipatedObj)
  }
)
