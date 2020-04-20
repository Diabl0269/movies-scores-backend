const { badInputStatus, emailExistsStatus } = require('../data/statuses.json')

module.exports = (e) => {
  const { errors } = e
  let status

  if (e === 'Validation failed') status = badInputStatus

  if (errors) {
    const [key1, key2] = Object.keys(e.errors)
    const regex = /userDetails(.)+/
    if (regex.test(key1) || regex.test(key2)) status = badInputStatus
  }

  if (e.code === 11000) status = emailExistsStatus

  return status
}
