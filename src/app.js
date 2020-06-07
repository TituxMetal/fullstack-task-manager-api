import express from 'express'

import { taskRoutes, welcomeRoutes } from '~/routes'

export const createApp = () => {
  const app = express()

  app.use(express.json())

  taskRoutes(app)
  welcomeRoutes(app)

  return app
}
