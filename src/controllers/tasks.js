import { requestValidator } from '~/middlewares'
import { taskService } from '~/services'
import { tasksValidator } from '~/validation'

const create = async ({ body }, res) => {
  const { description } = body

  const newTask = await taskService.add({ description })

  const response = {
    info: 'POST /api/tasks',
    message: 'Task has been successfully created.',
    data: newTask
  }

  res.status(201).json(response)
}

const getAll = async (_req, res) => {
  const tasks = await taskService.all()

  const response = { info: 'GET /api/tasks', count: tasks.count, data: tasks }

  res.status(200).json(response)
}

const update = async ({ body, params }, res) => {
  const taskId = params.id
  const task = await taskService.update(taskId, body)

  const response = {
    info: 'PATCH /api/tasks/:id',
    message: 'Task has been successfully updated.',
    data: task
  }

  res.status(200).json(response)
}

const remove = async ({ params }, res) => {
  const taskId = params.id
  const task = await taskService.remove(taskId)

  const response = {
    info: 'DELETE /api/tasks/:id',
    message: 'Task has been successfully deleted.',
    data: task
  }

  res.status(200).json(response)
}

export default {
  create: [requestValidator(tasksValidator.create), create],
  getAll,
  remove: [requestValidator(tasksValidator.remove), remove],
  update: [requestValidator(tasksValidator.update), update]
}
