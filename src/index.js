const { port } = require('./config')

require('./database')()

const server = require('./app')

server.listen(port, () => console.log(`Server is running on port: ${port}`))
