import home from "../controllers/home.controller";
import e from "express";
const router = e.Router();

router.get("/", home)

export default router