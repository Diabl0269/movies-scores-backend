const { moviesUrl, moviesToken } = require('../../../envConfig')
const axios = require('axios')
const mapMoviesResults = require('../../../utils/mapMoviesResults')
const fs = require('fs');


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

    fs.writeFileSync('movies-data.json', JSON.stringify(res.locals.data))

    next()
  } catch (e) {
    
    res.locals.error = e
    next()
  }
}
