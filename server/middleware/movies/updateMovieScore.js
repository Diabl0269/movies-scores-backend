const moviesScores = require('../../../mongoDB/models/moviesScores')
const users = require('../../../mongoDB/models/users')

module.exports = async (req, res, next) => {
  const {
    body: { score, movie }
  } = req

  if (score < 0 || score > 10) return res.sendStatus(400)

  try {
    const {
      locals: { userId }
    } = res

    res.locals.averageScoreObj = await moviesScores.updateMovieScore(movie, score, userId)

    await users.updateMovieScore({ id: userId, score, name })

    next()
  } catch (e) {        
    next()
  }
}
