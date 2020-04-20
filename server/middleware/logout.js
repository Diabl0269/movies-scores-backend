const users = require('../../mongoDB/models/users')

module.exports = async (req, res, next) => {
  const {
    locals: { userId, token },
  } = res 
  
  try {
    await users.logout(userId, token)
    next()
  } catch (e) {
    res.locals.error = e
    next()
  }
}
