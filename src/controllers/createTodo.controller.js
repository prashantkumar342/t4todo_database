import { Todo as todoModel } from '../models/todo.model.js'
const createTodo = async (req, res) => {
  const userId = req.userId
  const { title, description, todoId } = req.body;
  if (!title || !description) {
    return res.status(401).json({ message: "all fields are required" })
  }

  try {
    const modifiedTodoExists = await todoModel.findById(todoId);
    if (modifiedTodoExists) {
      modifiedTodoExists.title = title;
      modifiedTodoExists.description = description;
      await modifiedTodoExists.save();
      return res.status(200).json({ message: 'todo modified' })
    }
    const newTodo = await new todoModel({
      title: title,
      description: description,
      user: userId
    })
    const todoExist = await todoModel.findOne({ user: userId, title: title, description: description, })
    if (todoExist) {
      return res.status(409).json({ message: 'data already exists' })
    }
    await newTodo.save();
    res.status(200).json({ successTodo: 'new todo saved' })
  } catch (error) {
    res.status(500).json({ error: "server error at saving new todo" })
  }
}

export default createTodo;