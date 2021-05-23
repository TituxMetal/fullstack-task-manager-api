import { Router } from 'express'

const router = new Router()

router.get('/welcome', (_req, res) =>
  res.json({ message: 'Hello from express server' })
)

export default router
