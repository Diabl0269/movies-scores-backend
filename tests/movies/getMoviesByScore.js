const request = require('supertest')
const app = require('../../server/server')
const setUpDB = require('../fixtures/setUpDB')

beforeEach(setUpDB)

const results = [
    {
        name: 'The Lion King',
        averageScoreObj = {average: 7.5, count: 2}      
    },
    {
      name: 'Inception',
      averageScoreObj = {average: 6, count: 1}
    }
]

describe('get movies by score', () => {
  test('should return movies by scores ascending order', async () => {
    const queryObj = { min: 3, max: 9, sortBy: 'desc' }
    const { body: movies } = request(app).get(`/api/movies-scores/${queryObj}`).send()
    expect(movies).toEqual(results)
  })

  test('should retunr movies by scores descending order', () => {
    const queryObj = { min: 3, max: 9, sortBy: 'asc' }
    const { body: movies } = request(app).get(`/api/movies-scores/${queryObj}`).send()
    expect(movies).toEqual([results[1], results[0]])
  })
})
