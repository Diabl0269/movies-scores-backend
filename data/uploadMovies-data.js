const moviesScores = require('../mongoDB/models/moviesScores')
const data = require('./movies-data.json')

const uploadData = async () => {
  try {
    for (let d of data) {
      await moviesScores.create(d)
    }
  } catch (e) {
  }
}

uploadData()
