const express = require('express')
const router = express.Router()
const getMoviesByQuery = require('../../middleware/movies/getMoviesByQuery');

module.exports = router.get('/:query', getMoviesByQuery, (req, res) => {  
  const {
    locals: { data, error },
  } = res
  
  error ? res.sendStatus(500) : res.send(data)
})
