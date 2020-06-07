import { addTask, getAllTasks, removeTask, updateTask } from '~/controllers'
import validateBody from '~/middlewares/validateBody'
import { Task } from '~/models'
import { add, edit } from '~/validation'

const taskRoutes = router => {
  const prefixUri = '/api/tasks/'

  router.use((req, _res, next) => {
    req.taskModel = Task
    next()
  })

  router.get(prefixUri, getAllTasks)

  router.post(prefixUri, validateBody(add), addTask)

  router.patch(`${prefixUri}:id`, validateBody(edit), updateTask)

  router.delete(`${prefixUri}:id`, removeTask)
}

export default taskRoutes
