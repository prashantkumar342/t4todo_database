import login from "../controllers/login.controller.js";
import e from "express";
const router = e.Router();

router.post('/user/login', login)
export default router