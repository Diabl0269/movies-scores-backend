const { query, movieName } = require('../fixtures/moviesQuery')
const request = require('supertest')
const app = require('../../server/server')

describe('get movies array by query object', () => {
  test('result array shuold be longer then 0', async () => {
    const data = JSON.stringify(query)
    const {body: {results}} = await request(app).get(`/api/movies/query/${data}`).send()
    expect(results.length).toBeGreaterThan(0)
  })
})

describe('get movies array by name', () => {
  test('result array shuold be longer then 0', async () => {
    const {body: {results}} = await request(app).get(`/api/movies/name/${movieName}`).send()
    expect(results.length).toBeGreaterThan(0)
  })
})