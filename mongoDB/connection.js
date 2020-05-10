const { dbUrl } = require('../envConfig')
const mongoose = require('mongoose')
const { success, failure } = require('../utils/messageColor')

const successMsg = success('mongo connection exists')
const errorMsg = failure('connection error:')

const db = mongoose.connection
db.on('error', console.error.bind(console, errorMsg))
db.once('open', () => {
  console.log(successMsg)
})

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

mongoose.set('useCreateIndex', true)
