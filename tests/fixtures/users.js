const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { jwtSecret } = require('../../envConfig')

const password = '00000000'
const user0Id = new mongoose.Types.ObjectId()

module.exports = [
  {
    _id: user0Id,
    firstName: 'first0',
    lastName: 'last0',
    email: 'test0@test0.com',
    password,
    scoredMovies: [],
    tokens: [jwt.sign({ _id: user0Id.toString() }, jwtSecret)],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    firstName: 'first1',
    lastName: 'last1',
    email: 'test1@test1.com',
    password,
    scoredMovies: [],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    firstName: 'first2',
    lastName: 'last2',
    email: 'test2@test2.com',
    password,
    scoredMovies: [],
  },
]
