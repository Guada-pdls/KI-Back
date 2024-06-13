import CustomError from "../utils/error/CustomError.js";
import EErrors from "../utils/error/enum.js";
import sendMail from "../utils/sendMail.js";

const sendEmail = async (req, res, next) => {
    try {
        let { name, mail, msg } = req.body

        if (!name || !mail || !msg) {
            CustomError.createError({
                name: "Información requerida",
                message: "Debe enviar nombre, correo y mensaje",
                code: EErrors.VALIDATION_ERROR
            })
        }

        if (!name.match(/^[A-Za-zÑñÁáÉéÍíÓóÚú]+(?:\s+[A-Za-zÑñÁáÉéÍíÓóÚú]+)*$/gm)) {
            CustomError.createError({
                name: "Nombre inválido",
                message: "El nombre no debe contener caracteres especiales",
                code: EErrors.VALIDATION_ERROR,
            });
        } else if (!mail.match(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/)) {
            CustomError.createError({
                name: "Email inválido",
                message: "El email debe ser válido",
                code: EErrors.VALIDATION_ERROR,
            });
        } else if (!msg.match(/^[A-Za-zÑñÁáÉéÍíÓóÚú]+(?:\s+[A-Za-zÑñÁáÉéÍíÓóÚú]+)*$/gm)) {
            CustomError.createError({
                name: "Mensaje inválido",
                message: "El mensaje no debe contener caracteres especiales",
                code: EErrors.VALIDATION_ERROR,
            });
        }

        sendMail('gupiv.dev@gmail.com', 'Nuevo mensaje de ' + name, `
            <p>Nombre: ${name}</p>
            <p>Correo: ${mail}</p>
            <p>Mensaje: ${msg}</p>
        `)
        return res.status(200).json({ success: true, message: "Sent successfully" })
    } catch (error) {
        next(error)
    }
}

export default sendEmail