const express = require('express')
const router = express.Router()
const addUser = require('../../middleware/users/addUser')

module.exports = router.post('/', addUser, (req, res) => {
  const {
    locals: { token, user },
  } = res

  if (!(token || user)) return res.sendStatus(500)
  res.status(201).send(user)
})
