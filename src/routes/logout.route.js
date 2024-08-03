import logout from "../controllers/logout.controller.js";
import e from "express";

const router = e.Router();

router.post('/user/logout', logout)

export default logout