import httpError from 'http-errors'

import { Task } from '~/models'

const add = async ({ description }) => {
  if (await Task.exists({ description })) {
    const msg = 'One or more fiels already exists.'

    throw httpError(422, { reason: [{ msg }] })
  }

  const newTask = await Task.create({ description })

  return newTask
}

const all = async () => Task.find()

const update = async (taskId, updatedTask = {}) => {
  if (await Task.exists({ description: updatedTask.description })) {
    const msg = 'One or more fields already exists.'

    throw httpError(422, { reason: [{ msg }] })
  }

  const task = await Task.findById(taskId)

  if (!task) {
    throw httpError(404, { reason: 'No task found.' })
  }

  Object.assign(task, { ...updatedTask })

  await task.save()

  return task
}

const remove = async (taskId = '') => {
  const task = await Task.findOneAndRemove({ _id: taskId })

  if (!task) {
    throw httpError(404, { reason: 'No task found.' })
  }

  return task
}

export default { add, all, update, remove }
