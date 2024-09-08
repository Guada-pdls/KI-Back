import { Router } from "express";
import sendEmail from "../controller/emailController.js";

const router = Router()

router.post('/api/email', sendEmail)
router.get('/', (req, res) => {
    res.send("Router working")
})

export default router