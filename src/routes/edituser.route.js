import edituser from "../controllers/edituser.controller.js";

import e from "express";

const router = e.Router();

router.put('/edit/user', edituser);
export default router;