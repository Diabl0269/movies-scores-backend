const express = require('express')
const router = express.Router()
const getMoviesByName = require('../../middleware/movies/getMoviesByName');

module.exports = router.get('/name/:name', getMoviesByName, (req, res) => {  
  const {
    locals: { data, error },
  } = res
  error ? res.sendStatus(500) : res.send(data)
})
