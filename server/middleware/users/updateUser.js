const users = require('../../../mongoDB/models/users')
const saveUserErrorStatusesSwitch = require('../../../utils/saveUserErrorStatusesSwitch')
const validataUserUpdate = require('../../../utils/validataUserUpdate')

module.exports = async (req, res, next) => {
  const { body } = req

  const {
    locals: { userId }
  } = res

  try {
    const isValidated = validataUserUpdate(body)
    if (!isValidated) throw 'Validation failed'

    const { password } = body
    const updateObj = { userDetails: body, password }

    res.locals.user = await users.findByIdAndUpdate(userId, updateObj, {
      new: true
    })

    next()
  } catch (e) {
    const status = saveUserErrorStatusesSwitch(e)

    if (status) return res.sendStatus(status)

    next()
  }
}
