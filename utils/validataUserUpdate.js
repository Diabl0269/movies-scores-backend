const emailRegex = new RegExp(({ email } = require('../data/regexs.json')))

module.exports = (data) => {
  const { firstName, lastName, email, password } = data

  return !(
    (firstName && firstName.length === 0) ||
    (lastName && lastName.length === 0) ||
    (typeof email === 'string' && email.length === 0) ||
    !emailRegex.test(email) ||
    (password && password.length < 8)
  )
}