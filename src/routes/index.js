import { Router } from "express";
import sendEmail from "../controller/emailController.js";
import getQuestions from "../controller/questionsController.js";

const router = Router()

router.post('/api/email', sendEmail)
router.get('/api/questions', getQuestions)

export default router