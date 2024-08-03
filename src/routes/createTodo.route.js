import createTodo from "../controllers/createTodo.controller.js";
import e from "express";

const router = e.Router();

router.post('/new/todo', createTodo);

export default router;