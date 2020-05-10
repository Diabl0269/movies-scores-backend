const { moviesUrl, moviesToken } = require('../../../envConfig')
const axios = require('axios')
const mapMoviesResults = require('../../../utils/mapMoviesResults')

module.exports = async (req, res, next) => {
  try {
    const {
      params: { query }
    } = req

    const params = JSON.parse(query)
    const {
      data,
      data: { results }
    } = await axios.get(`${moviesUrl}/discover/movie`, {
      params,
      headers: { Authorization: `Bearer ${moviesToken}` }
    })

    const relevantDataFromRes = mapMoviesResults(results)
    delete data.results
    res.locals.data = { ...data, results: relevantDataFromRes }

    next()
  } catch (e) {
    res.locals.error = e
    next()
  }
}
