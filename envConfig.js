const path = 'envs/'.concat(process.env.NODE_ENV === 'test' ? 'test.env' : 'dev.env')

require('dotenv').config({ path })

module.exports = {
  port: process.env.PORT,
  moviesUrl: process.env.MOVIES_DB_URL,
  moviesToken: process.env.MOVIES_TOKEN,
  dbUrl: process.env.MAIN_DB_URL,
  jwtSecret: process.env.JWT_SECRET,
}
