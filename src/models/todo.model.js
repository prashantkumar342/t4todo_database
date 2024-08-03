import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: false
  },
  description: {
    type: String,
    required: true,
    unique: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', required: true
  }
}, { timestamps: true })

export const Todo = mongoose.model('Todo', todoSchema)