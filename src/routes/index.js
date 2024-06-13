import { Router } from "express";
import sendEmail from "../controller/emailController.js";

const router = Router()

router.post('/api/email', sendEmail)

export default router