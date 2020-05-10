const users = require('../../../mongoDB/models/users')

module.exports = async (req, res, next) => {
  const {
    locals: { userId },
  } = res

  try {
    res.locals.user = await users.findById(userId)
    
    next()
  } catch (e) {
    next()
  }
}
