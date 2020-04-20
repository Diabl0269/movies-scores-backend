const express = require('express')
const router = express.Router()
const deleteUser = require('../../middleware/users/deleteUser')

module.exports = router.delete('/:id', deleteUser, (req, res) => {
  const {
    locals: { error },
  } = res
  const status = error ? 500 : 204
  res.sendStatus(status)
})
