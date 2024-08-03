import fetchtodos from "../controllers/gettodos.controller.js";
import e from "express";

const router = e.Router();

router.get('/get/todo', fetchtodos)

export default router