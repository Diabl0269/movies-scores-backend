const addUser = require('./routes/users/addUser')
const auth = require('./middleware/auth')
const authRoute = require('./routes/auth')
const deleteUser = require('./routes/users/deleteUser')
const getUser = require('./routes/users/getUser')
const login = require('./routes/login')
const logout = require('./routes/logout')
const updateMovieScore = require('./routes/movies/updateMovieScore')
const updateUser = require('./routes/users/updateUser')
const getMovies = require('./routes/movies/getMovies')
const path = require('path')

module.exports = (app) => {
  app.use('/api/movies', getMovies)

  app.use('/api/movie-score', updateMovieScore)

  app.use('/api/user', auth)
  app.use('/api/user', deleteUser)
  app.use('/api/user', getUser)
  app.use('/api/user', updateUser)

  app.use('/api/users', addUser)

  app.use('/api/auth', authRoute)
  app.use('/api/login', login)
  app.use('/api/logout', logout)

  app.get('/*', (req, res) => {
    // Add path to build's index
    res.sendFile(path.join(__dirname, '../build/index.html'))
  })
}
