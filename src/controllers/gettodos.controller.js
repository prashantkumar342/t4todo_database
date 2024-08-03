import { Todo as userTodo } from "../models/todo.model.js"
const fetchtodos = async (req, res) => {
  const userId = req.userId

  try {
    const findTodo = await userTodo.find({ user: userId })
    if (findTodo.length === 0) return res.status(204).json({ message: "no todo content" })
    res.status(200).json(findTodo)
  } catch (error) {
    res.status(500).json({ error: "fetching todo error" })
  }

}
export default fetchtodos