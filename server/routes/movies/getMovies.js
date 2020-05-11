const express = require('express')
const router = express.Router()
const getMovies = require('../../middleware/movies/getMovies')

module.exports = router.post('/', getMovies, (req, res) => {
  const {
    locals: { movies }
  } = res

  movies ? res.send(movies) : res.sendStatus(500)
})
