import express from 'express'
import 'express-async-errors'
import httpError from 'http-errors'

import { port } from '~/config'
import { errorHandler } from '~/middlewares'
import { taskRoutes, welcomeRoutes } from '~/routes'

export const createApp = () => {
  const app = express()

  app.use(express.json())

  taskRoutes(app)
  welcomeRoutes(app)

  app.all('*', async (req, _res, next) =>
    next(httpError(404, { reason: `${req.path} does not exists` }))
  )

  app.use(errorHandler)

  const server = app.listen(port, '0.0.0.0', () =>
    console.info(`Server is listening on http://localhost:${port}`)
  )

  return server
}
