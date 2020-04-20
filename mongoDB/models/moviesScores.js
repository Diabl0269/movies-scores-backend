const schema = require('../schemas/moviesScores')
const mongoose = require('mongoose')
const calculateAverage = require('../../utils/calculateAverage')

schema.statics.updateMovieScore = async (name, newScore, id) => {
  try {
    const scoreObj = { votingUserId: id.toString(), score: newScore }
    let updated = false
    let movie = await moviesScoresModel.findOne({ name })

    if (!movie) {
      movie = await moviesScoresModel.create({ name, scoreObjs: [scoreObj] })
      updated = true
    } else
      for (let obj of movie.scoreObjs) {
        if (obj.votingUserId.toString() === id) {
          obj.score = newScore
          updated = true
          break
        }
      }

    if (!updated) movie.scoreObjs.push(scoreObj)

    await movie.save()
    return movie.averageScoreObj
  } catch (e) {
    throw 'Unable to update movie score'
  }
}

schema.methods.toJSON = function () {
  const { name: lowerName, scoreObjs } = this.toObject()
  const averageScoreObj = calculateAverage(scoreObjs)
  const name = lowerName.replace(/^\w/, (c) => c.toUpperCase())
  return { name, averageScoreObj }
}

schema.pre('save', function () {
  this.averageScoreObj = calculateAverage(this.scoreObjs)
})

const moviesScoresModel = mongoose.model('moviesScores', schema)

module.exports = moviesScoresModel
