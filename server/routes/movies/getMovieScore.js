const express = require('express')
const router = express.Router()
const getMovieScore = require('../../middleware/movies/getMovieScore');

module.exports = router.get('/:name', getMovieScore,(req, res) => {
  const {
    locals: { averageScoreObj }
  } = res
  
  averageScoreObj ? res.send(averageScoreObj) : res.sendStatus(500)
})
