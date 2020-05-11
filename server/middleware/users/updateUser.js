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

    user = await users.findById(userId)
    const { password, firstName, lastName, email } = body
    if (firstName) user.userDetails.firstName = firstName
    if (lastName) user.userDetails.lastName = lastName
    if (email) user.userDetails.email = email
    if (password) user.password = password
    await user.save()

    res.locals.user = user

    next()
  } catch (e) {
    const status = saveUserErrorStatusesSwitch(e)

    if (status) return res.sendStatus(status)

    next()
  }
}
