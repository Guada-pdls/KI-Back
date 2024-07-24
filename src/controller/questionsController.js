import CustomError from "../utils/error/CustomError.js";
import EErrors from "../utils/error/enum.js";
import { __dirname } from "../utils/utils.js"
import fs from "fs/promises"
import path from "path";

const getQuestions = async (req, res, next) => {
    try {
        const filePath = path.join(__dirname, './controller/questions.JSON');
        const data = await fs.readFile(filePath, 'utf8');
        const questions = JSON.parse(data);

        return res.status(200).json({
            success: true,
            message: "Sent successfully",
            data: questions
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

export default getQuestions;