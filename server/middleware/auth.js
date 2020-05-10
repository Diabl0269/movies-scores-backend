const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../../envConfig')

module.exports = async (req, res, next) => {
  try {
    
    const token = req.header('Authorization').replace('Bearer ', '')    
    res.locals.token = token    
    const decoded = await jwt.verify(token, jwtSecret)
    const { _id } = decoded
    res.locals.userId = _id    
    
    next()
  } catch (e) {    
    res.sendStatus(401)
  }
}
