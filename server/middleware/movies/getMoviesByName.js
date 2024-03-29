const { moviesUrl, moviesToken } = require('../../../envConfig')
const axios = require('axios')
const mapMoviesResults = require('../../../utils/mapMoviesResults')

module.exports = async (req, res, next) => {
  const {
    params: { name: query }
  } = req

  const {
    data,
    data: { results }
  } = await axios.get(`${moviesUrl}/search/movie`, {
    params: { query },
    headers: { Authorization: `Bearer ${moviesToken}` }
  })
  const relevantDataFromRes = mapMoviesResults(results)
  delete data.results
  res.locals.data = { name: data.title, results: relevantDataFromRes, ...data }

  next()
  try {
  } catch (e) {
    res.locals.error = e
    next()
  }
}
