const { moviesUrl, moviesToken } = require('../../../envConfig')
const axios = require('axios')
const mapMoviesResults = require('../../../utils/mapMoviesResults');

module.exports = async (req, res, next) => {
    
  const { params: {query} } = req
  
  const params = JSON.parse(query)

  const { data, data: {results} } = await axios.get(`${moviesUrl}/discover/movie`, {
    params,
    headers: { Authorization: `Bearer ${moviesToken}` },
  })

  const relevantDataFromRes = mapMoviesResults(results)

  res.locals.data = { ...data, relevantDataFromRes }

  next()
  try {
  } catch (e) {
    res.locals.error = e
    next()
  }
}
