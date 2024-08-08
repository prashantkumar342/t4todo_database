import fetchuser from '../controllers/fetchuser.controller.js'

import e from 'express'

const router = e.Router();

router.get('/user', fetchuser)

export default router;