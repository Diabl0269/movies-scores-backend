const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const updateMovieScore = require('../../middleware/movies/updateMovieScore')

module.exports = router.patch('/', auth, updateMovieScore, (req, res) => {
  const {
    locals: { averageScoreObj }
  } = res

  if (!averageScoreObj) return res.sendStatus(500)
  res.send(averageScoreObj)
})
