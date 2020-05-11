const express = require('express')
const router = express.Router()
const getUser = require('../../middleware/users/getUser')

module.exports = router.get('/', getUser, (req, res) => {
  const {
    locals: { user },
  } = res
  if (!user) return res.sendStatus(500)
  res.send(user)
})
