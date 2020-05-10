const Users = require('../../mongoDB/models/users')
const MoviesScores = require('../../mongoDB/models/moviesScores')
const usersFixtures = require('./users')
const moviesScores = require('./movies')
const mongoose = require('mongoose')
const { dbUrl } = require('../../envConfig')

module.exports = async () => {
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  await Users.deleteMany()
  await MoviesScores.deleteMany()
  await new Users({
    userDetails: usersFixtures[0],
    password: usersFixtures[0].password,
    _id: usersFixtures[0]._id
  }).save()
  await new Users({
    userDetails: usersFixtures[2],
    password: usersFixtures[2].password,
    _id: usersFixtures[2]._id
  }).save()
  await new MoviesScores(moviesScores[1]).save()
}
