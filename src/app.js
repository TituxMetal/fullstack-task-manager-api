import express from 'express'

import tasksRoute from '~/routes/task'
import welcomeRoute from '~/routes/welcome'

export const createApp = () => {
  const app = express()

  app.use(express.json())

  app.use('/api', welcomeRoute)
  app.use('/api/tasks', tasksRoute)

  return app
}
