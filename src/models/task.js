import { model, Schema } from 'mongoose'

const taskSchema = new Schema(
  {
    description: { type: String, required: true, unique: true, trim: true },
    completed: { type: Boolean, default: false }
  },
  { timestamps: true }
)

taskSchema.set('toJSON', {
  versionKey: false,
  virtuals: true,
  transform: (doc, { _id, ...rest }) => rest
})

const Task = model('Task', taskSchema)

export default Task
