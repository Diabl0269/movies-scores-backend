const users = require('../../mongoDB/models/users')

module.exports = async (req, res, next) => {
  const {
    body: { email, password },
  } = req

  try {
    res.locals.user = await users.login(email, password)

    next()
  } catch (e) {
    res.locals.error = e
    next()
  }
}
