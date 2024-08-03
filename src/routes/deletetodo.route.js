import deleteTodo from "../controllers/delete.controller.js";
import e from "express";

const router = e.Router();

router.post('/delete/todo', deleteTodo)

export default router;