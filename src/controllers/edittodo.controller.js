import { Todo as todoModel } from "../models/todo.model.js";
const editTodo = async (req, res) => {
  const { title, description, todoId } = req.body;
  if (!title || !description) {
    return res.status(401).json({ message: "all fields are required" })
  }
  try {
    const todoExists = await todoModel.findById(todoId);
    todoExists.title = title;
    todoExists.description = description;
    await todoExists.save();
  } catch (error) {
    res.status(500).json({ message: 'error at editing todo' })
  }
}
export default editTodo