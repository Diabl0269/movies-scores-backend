const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')
const emailRegex = new RegExp(({ email } = require('../../data/regexs.json')))
const saltLength = 32

module.exports = new Schema({
  salt: {
    type: String,
    required: true,
    default: crypto.randomBytes(Math.ceil(saltLength)).toString('hex'),
  },
  password: { type: String, required: true },
  tokens: [
    {
      type: String,
    },
  ],
  scoredMovies: [{ type: Object, name: { type: String }, score: { type: Number } }],
  userDetails: {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      validate(value) {
        return emailRegex.test(value)
      },
    },
  },
})
