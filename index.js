require('./mongoDB/connection')
const app = require('./server/server')
const { success } = require('./utils/messageColor')
const { port } = require('./envConfig')

const successMsg = success(`Server is running on port: ${port}`)

app.listen(port, () => console.log(successMsg))
