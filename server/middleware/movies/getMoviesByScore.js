const convertEdges = require('../../../utils/convertEdges')
const moviesScores = require('../../../mongoDB/models/moviesScores')

module.exports = async (req, res, next) => {
  try {
    const {
      params: { query }
    } = req

    const { min, max, sortBy } = JSON.parse(query)
    const queryObj = { 'averageScoreObj.average': convertEdges({ min, max }) }

    res.locals.movies = await moviesScores.find(queryObj).sort(sortBy)

    next()
  } catch (e) {
    next()
  }
}
