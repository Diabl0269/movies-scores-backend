const express = require('express')
const router = express.Router()
const logout = require('../middleware/logout');
const auth = require('../middleware/auth');

module.exports = router.post('/', auth, logout, (req, res) => {
  const status = res.locals.error ? 500 : 200
  res.sendStatus(status)
})
