const express = require('express')
const router = express.Router()
const deleteUser = require('../../middleware/users/deleteUser')
const auth = require('../../middleware/auth')

module.exports = router.delete('/', auth, deleteUser, (req, res) => {
  const {
    locals: { error }
  } = res

  const status = error ? 500 : 204
  res.sendStatus(status)
})
