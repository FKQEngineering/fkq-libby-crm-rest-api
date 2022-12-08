import { Router } from 'express'
import { signup, signin } from './controller'

const router = new Router()

router.post('/signup', signup);
router.post('/signin', signin);

export default router
