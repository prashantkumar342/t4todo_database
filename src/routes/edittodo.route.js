import editTodo from "../controllers/edittodo.controller.js";

import e from "express";

const router = e.Router();

router.post('/edit/todo', editTodo)