const express = require('express')
const router = express.Router()
const login = require('../middleware/login')

module.exports = router.post('/', login, (req, res) => {
  const {
    locals: { user, error },
  } = res
  if (error) return res.sendStatus(500)
  user ? res.send(user) : res.sendStatus(401)
})
