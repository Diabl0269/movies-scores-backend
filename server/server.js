const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, '../../client/build')))

require('./serverInit')(app)

module.exports = app