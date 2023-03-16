import express from 'express'
import { ConfirmationController, ForgetPasswordController, InviteController } from '../controllers/SendController'

const router = express.Router()

router.post('/confirmation', ConfirmationController)
router.post('/forget', ForgetPasswordController)
router.post('/invite', InviteController)

export default router