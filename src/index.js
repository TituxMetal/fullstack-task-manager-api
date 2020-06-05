import { createApp } from './app'
import { port } from '~/config'
import connectDb from '~/database'
import { localISOTime, shutdownServer } from './utils'

const app = createApp()

app.listen(port, '0.0.0.0', () => {
  connectDb()

  console.info(`Server is listening on http://localhost:${port}`)

  process.on('SIGINT', () => {
    console.info('Got SIGINT. Graceful shutdown.', localISOTime())
    shutdownServer(app)
  })

  process.on('SIGTERM', () => {
    console.info('Got SIGTERM. Graceful shutdown.', localISOTime())
    shutdownServer(app)
  })
})
