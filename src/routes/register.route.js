import register from "../controllers/register.controller.js";
import e from "express";
const router = e.Router();

router.post("/user/register", register)
export default router