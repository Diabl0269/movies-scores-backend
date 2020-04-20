const users = require('../../../mongoDB/models/users')
const saveUserErrorStatusesSwitch = require('../../../utils/saveUserErrorStatusesSwitch')

module.exports = async (req, res, next) => {
  const { body } = req
  const { password } = body

  const user = new users({ userDetails: body, password })

  try {
    await user.save()

    res.locals.token = await user.generateAuthToken()
    res.locals.user = user

    next()
  } catch (e) {
    const status = saveUserErrorStatusesSwitch(e)
    if (status) return res.sendStatus(status)

    next()
  }
}
