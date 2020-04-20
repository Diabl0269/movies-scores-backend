const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

module.exports = router.get('/', auth, (req, res) => {
  const status = res.locals.userId ? 200 : 500
  res.sendStatus(status)
})
