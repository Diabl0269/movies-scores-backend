const moviesScores = require('../../../mongoDB/models/moviesScores')
const fixQuery = require('../../../utils/fixQuery')

module.exports = async (req, res, next) => {
  try {
    const { body } = req

    const { sortBy = 'averageScoreObj.average' } = body

    const queryObj = fixQuery(body)

    res.locals.movies = await moviesScores.find(queryObj).sort(sortBy)
    next()
  } catch (e) {
    next()
  }
}
