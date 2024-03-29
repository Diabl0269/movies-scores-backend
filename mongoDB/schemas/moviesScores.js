const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  name: { type: String, trim: true, required: true, unique: true, lowercase: true },
  scoreObjs: [
    {
      _id: false,
      votingUserId: { type: String, required: true },
      score: { type: Number }
    }
  ],
  averageScoreObj: {
    count: { type: Number, default: 0, required: true },
    average: { type: Number, default: 0, required: true }
  },
  genre_ids: [{ type: Number }],
  releaseYear: { type: Number }
})

module.exports = schema
