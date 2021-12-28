import { errorHandler, notFound } from '@lgdweb/common-express-helpers'
import { json } from 'body-parser'
import cors from 'cors'
import express from 'express'
import 'express-async-errors'

import { hostUrl, port } from '~/config'
import { taskRoutes, welcomeRoutes } from '~/routes'

export const createApp = () => {
  const app = express()

  app.use(json())
  app.use(cors())

  app.use('/api/tasks', taskRoutes)
  app.use('/api', welcomeRoutes)

  app.all('*', notFound)

  app.use(errorHandler)

  const server = app.listen(port, '0.0.0.0', () =>
    console.info(`Server is listening on ${hostUrl}:${port}`)
  )

  return server
}
