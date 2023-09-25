import { body } from "express-validator";

const dtoLogin = [
    body("user").trim().notEmpty().withMessage("Campo usuario vacio")
        .isString().withMessage("Tipo de dato incorrecto!"),
    
    body("password").trim().notEmpty().withMessage("Campo password vacio")
        .isString().withMessage("Tipo de dato incorrecto!")
]

export { dtoLogin };