const next = require('next')

const { port, isProd } = require('./config')
const dev = !isProd
const app = next({ dev })
const handle = app.getRequestHandler()

require('./database')()

const server = require('./app')

app.prepare().then(() => {
  server.get('/_next/*', (req, res) => handle(req, res))
  server.get('/static/*', (req, res) => handle(req, res))
  server.get('*', (req, res) => handle(req, res))

  server.listen(port, err => {
    if (err) {
      throw err
    }
    console.log(`Running on port ${port}`)
  })
})
