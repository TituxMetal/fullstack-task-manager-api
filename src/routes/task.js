import { Router } from 'express'

import { tasksController } from '~/controllers'

const router = new Router()

router.get('/', tasksController.getAll)

router.post('/', tasksController.create)

router.put('/:id', tasksController.update)

router.delete('/:id', tasksController.remove)

export default router
