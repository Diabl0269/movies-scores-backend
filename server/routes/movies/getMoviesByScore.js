const express = require('express')
const router = express.Router()
const getMoviesByScore = require('../../middleware/movies/getMoviesByScore')

module.exports = router.get('/:query', getMoviesByScore, (req, res) => {
  const {
    locals: { movies }
  } = res

  if (!movies) return res.sendStatus(500)
  res.send(movies)
})
