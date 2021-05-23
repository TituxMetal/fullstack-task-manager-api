import { Router } from 'express'

import { addTask, getAllTasks, removeTask, updateTask } from '~/controllers'

const router = new Router()

router.get('/', (_req, res) =>
  res.status(200).json({ message: 'GET /api/tasks' })
)

router.post('/', (_req, res) =>
  res.status(200).json({ message: 'POST /api/tasks' })
)

router.patch('/:id', (_req, res) =>
  res.status(200).json({ message: 'PATCH /api/tasks' })
)

router.delete('/:id', (_req, res) =>
  res.status(200).json({ message: 'DELETE /api/tasks' })
)

export default router
