const addUser = require('./routes/users/addUser')
const auth = require('./middleware/auth')
const authRoute = require('./routes/auth')
const deleteUser = require('./routes/users/deleteUser')
const getMovieScore = require('./routes/movies/getMovieScore')
const getMoviesByName = require('./routes/movies/getMoviesByName')
const getMoviesByQuery = require('./routes/movies/getMoviesByQuery')
const getMoviesByScore = require('./routes/movies/getMoviesByScore')
const getUser = require('./routes/users/getUser')
const login = require('./routes/login')
const logout = require('./routes/logout')
const path = require('path')
const updateMovieScore = require('./routes/movies/updateMovieScore')
const updateUser = require('./routes/users/updateUser')

module.exports = (app) => {
  app.use('/api/movie-score', getMovieScore)
  app.use('/api/movie-score', updateMovieScore)

  app.use('/api/movies/name', getMoviesByName)
  app.use('/api/movies/query', getMoviesByQuery)

  app.use('/api/movies-scores', getMoviesByScore)

  app.use('/api/user', auth)
  app.use('/api/user', deleteUser)
  app.use('/api/user', getUser)
  app.use('/api/user', updateUser)

  app.use('/api/users', addUser)

  app.use('/api/auth', authRoute)
  app.use('/api/login', login)
  app.use('/api/logout', logout)

  app.get('/*', (req, res) => {
    res.send('hey')
    // Add path to build's index
    // res.sendFile(path.join(__dirname, '../../frontend/'))
  })
}
