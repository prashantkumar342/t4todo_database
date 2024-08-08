import e from "express";
const router = e.Router()
import authentication from "../middleware/auth.middleware.js";
import register from "../controllers/register.controller.js";
import home from "../controllers/home.controller.js";
import login from "../controllers/login.controller.js";
import dashboard from "../controllers/authenticate.controller.js";
import logout from "./logout.route.js";
import createTodo from "../controllers/createTodo.controller.js";
import fetchtodos from "../controllers/gettodos.controller.js";
import deleteTodo from "../controllers/delete.controller.js";
import editTodo from "../controllers/edittodo.controller.js";
import edituser from "../controllers/edituser.controller.js";
import fetchuser from "../controllers/fetchuser.controller.js"
import verifyPassword from "../middleware/passverify.middleware.js";

router.use('/user/register', register);
router.use('/user/login', login);
router.use('/authenticate', authentication, dashboard);
router.use('/user/logout', authentication, logout);
router.use('/new/todo', authentication, createTodo);
router.use('/get/todo', authentication, fetchtodos);
router.use('/delete/todo', authentication, deleteTodo);
router.use('/edit/todo', authentication, editTodo);
router.use('/user', authentication, fetchuser)
router.use('/edit/user', authentication, verifyPassword, edituser)

router.use('/', home);

export default router