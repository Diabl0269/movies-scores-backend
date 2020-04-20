const mongoose = require('mongoose')

module.exports = [
  {
    name: 'Madagascar',
    scoreObjs: []
  },
  {
    name: 'The Lion King',
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
    scoreObjs: [
      {
        votingUserId: new mongoose.Types.ObjectId().toString(),
        score: 6
      }
    ]
  }
]
