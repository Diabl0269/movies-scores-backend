const moviesScores = require('../../../mongoDB/models/moviesScores')

module.exports = async (req, res, next) => {
  const {
    params: { name }
  } = req
  try {
    const defaultObj = { average: 0, count: 0 }
    const movie = await moviesScores.findOne({ name })

    res.locals.averageScoreObj = movie ? movie.averageScoreObj : defaultObj
    next()
  } catch (e) {
    next()
  }
}
