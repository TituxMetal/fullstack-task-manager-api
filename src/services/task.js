import HttpError from 'http-errors'

import { Task } from '~/models'

const add = async ({ description }) => {
  if (await Task.exists({ description })) {
    const message = { msg: 'One or more fiels already exists.' }

    throw new HttpError(422, { reason: [message] })
  }

  const newTask = await Task.create({ description })

  return newTask
}

const all = async () => Task.find()

const update = async (taskId, updatedTask = {}) => {
  if (await Task.exists({ description: updatedTask.description })) {
    const message = { msg: 'One or more fields already exists.' }

    throw new HttpError(422, { reason: [message] })
  }

  const task = await Task.findById(taskId)

  if (!task) {
    throw new HttpError(404, { reason: 'No task found.' })
  }

  Object.assign(task, { ...updatedTask })

  await task.save()

  return task
}

const remove = async (taskId = '') => {
  const task = await Task.findByIdAndDelete(taskId)

  if (!task) {
    throw new HttpError(404, { reason: 'No task found.' })
  }

  return task
}

export default { add, all, update, remove }
