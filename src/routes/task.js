import { addTask, getAllTasks, removeTask, updateTask } from '~/controllers'
import { requestValidator } from '~/middlewares'
import { Task } from '~/models'
import { tasksValidator } from '~/validation'

const taskRoutes = router => {
  const prefixUri = '/api/tasks/'
  const { create, edit } = tasksValidator

  router.use((req, _res, next) => {
    req.taskModel = Task
    next()
  })

  router.get(prefixUri, getAllTasks)

  router.post(prefixUri, requestValidator(create), addTask)

  router.patch(`${prefixUri}:id`, requestValidator(edit), updateTask)

  router.delete(`${prefixUri}:id`, removeTask)
}

export default taskRoutes
