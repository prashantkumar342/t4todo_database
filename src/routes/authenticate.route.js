import authenticate from "../controllers/authenticate.controller.js";
// import authentication from "../middleware/auth.middleware.js";
import e from "express";

const router = e.Router();

router.get('/authenticate', authenticate);
export default router