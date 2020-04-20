const users = require('../../../mongoDB/models/users')

module.exports = async (req, res, next) => {
  const { userId } = res.locals

  try {
    await users.findByIdAndDelete(userId)
    next()
  } catch (e) {
    res.locals.error = e
    next()
  }
}
