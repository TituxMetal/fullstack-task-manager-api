import { model, Schema } from 'mongoose'

const taskSchema = new Schema(
  {
    description: { type: String, required: true, unique: true, trim: true },
    completed: { type: Boolean, default: false }
  },
  { timestamps: true }
)

export const Task = model('Task', taskSchema)
