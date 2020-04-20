const express = require('express')
const router = express.Router()
const updateUser = require('../../middleware/users/updateUser');

module.exports = router.patch('/', updateUser, (req, res) => {
  const {
    locals: { user },
  } = res
  
  if (!user) return res.sendStatus(500)
  res.send(user)
})
