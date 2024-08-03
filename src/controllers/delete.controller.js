import { Todo as todoModel } from "../models/todo.model.js";
const deleteTodo = async (req, res) => {
  const todoId = req.body.todoId;
  try {
    const todoExists = todoModel.findById(todoId)
    if (!todoExists) return res.status(404).json({ message: 'todo not exists' })
    await todoModel.findByIdAndDelete(todoId);
  } catch (error) {
    res.status(500).json({ message: 'something went wrong while deleting todo' })
  }


}
export default deleteTodo