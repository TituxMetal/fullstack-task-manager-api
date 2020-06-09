export const getAllTasks = async ({ taskModel }, res) => {
  try {
    const tasks = await taskModel.find()

    res.json(tasks)
  } catch (e) {
    res.status(400).send(e)
  }
}

export const addTask = async ({ body, taskModel }, res) => {
  const Task = taskModel
  try {
    const foundTask = await Task.find({ description: body.description }).countDocuments()

    if (foundTask) {
      const error = JSON.stringify({ errors: { description: 'Task already exists' } })
      throw new Error(error)
    }

    const task = new Task({ ...body })
    await task.save()

    res.status(201).json(task)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const updateTask = async ({ body, params, taskModel }, res) => {
  const { description, completed } = body

  try {
    const task = await taskModel.findOne({ _id: params.id })

    if (!task) {
      const error = JSON.stringify({ errors: 'No task found' })
      throw new Error(error)
    }

    const foundTask = await taskModel.find({ description }).countDocuments()

    if (foundTask) {
      const error = JSON.stringify({ errors: { description: 'Task already exists' } })
      throw new Error(error)
    }

    task.description = description || task.description
    task.completed = description ? false : completed || !task.completed

    const updatedTask = await task.save()

    res.json(updatedTask)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export const removeTask = async ({ params, taskModel }, res) => {
  try {
    const task = await taskModel.findOneAndDelete({ _id: params.id })

    res.json(task)
  } catch (e) {
    res.status(400).send(e.message)
  }
}
