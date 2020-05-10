const schema = require('../schemas/users')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../../envConfig')
const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const saltLength = 32

schema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`
})

schema.pre('save', async function (next) {
  const user = this

  if (user.password.length < 8) throw Error

  if (user.isModified('password')) {
    user.salt = crypto.randomBytes(Math.ceil(saltLength)).toString('hex')
    user.password = await bcrypt.hash(user.password + user.salt, 8)
  }

  next()
})

schema.methods.toJSON = function () {
  const user = this.toObject()
  const { tokens } = user
  const token = tokens[tokens.length - 1]  
  delete user.tokens
  delete user.salt
  delete user.password
  return {...user, token}
}

const tokenLifeTime = 10000

schema.methods.generateAuthToken = async function () {
  const user = this

  const token = jwt.sign({ _id: user._id.toString() }, jwtSecret, {
    expiresIn: tokenLifeTime
  })
  user.tokens = user.tokens.concat(token)

  await user.save()

  return token
}

schema.methods.filterExpiredTokens = async function () {
  const user = this
  let tokens
  tokens = user.tokens.filter((token) => {
    return jwt.verify(token.token, process.env.JWT_SECRET, (err, res) =>
      err && err.name === 'TokenExpiredError' ? false : true
    )
  })
  if (tokens.length !== user.tokens.length) {
    user.tokens = tokens
    try {
      await user.save()
    } catch (e) {
      return
    }
  }
  return
}

schema.statics.login = async (email, password) => {
  const user = await usersModel.findOne({ 'userDetails.email': email })

  if (!user) return
  await user.filterExpiredTokens()
  const isMatch = await bcrypt.compare(password + user.salt, user.password)
  await user.generateAuthToken()
  return isMatch ? user : null
}

schema.statics.logout = async (id, token) => {
  const user = await usersModel.findById(id)

  if (!user) throw 'Unable to find user for logout'
  user.tokens.filter((userToken) => userToken !== token)
  await user.save()
}

schema.statics.updateMovieScore = async ({ id, name, score }) => {
  const user = await usersModel.findById(id)
  let userScored = false

  if (!user) throw 'Unable to find user'

  for (let movie of user.scoredMovies) {
    if (movie.name === name) {
      movie.score = score
      userScored = true
      break
    }
  }

  if (!userScored) user.scoredMovies.push({ name, score })

  await user.save()
}

const usersModel = mongoose.model('users', schema)
module.exports = usersModel
