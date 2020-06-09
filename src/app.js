import { NotFoundError } from '@lgdweb/common-express-helpers'
import express from 'express'
import 'express-async-errors'

import { errorHandler } from './middlewares'
import { taskRoutes, welcomeRoutes } from '~/routes'

export const createApp = () => {
  const app = express()

  app.use(express.json())

  taskRoutes(app)
  welcomeRoutes(app)

  app.all('*', async (req, _res) => {
    throw new NotFoundError(req.path)
  })

  app.use(errorHandler)

  return app
}
