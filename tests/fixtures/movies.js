const mongoose = require('mongoose')

module.exports = [
  {
    name: 'Madagascar',
    releaseYear: '1996',
    genre_ids: [18],
    scoreObjs: []
  },
  {
    name: 'The Lion King',
    releaseYear: '1999',
    genre_ids: [16],
    scoreObjs: [
      {
        votingUserId: new mongoose.Types.ObjectId().toString(),
        score: 5
      },
      {
        votingUserId: new mongoose.Types.ObjectId().toString(),
        score: 10
      }
    ]
  },
  {
    name: 'Inception',
    releaseYear: '2010',
    genre_ids: [20],
    scoreObjs: [
      {
        votingUserId: new mongoose.Types.ObjectId().toString(),
        score: 6
      }
    ]
  }
]
