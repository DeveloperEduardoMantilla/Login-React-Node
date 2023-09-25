import { validationResult } from "express-validator";

const myValidationResult = validationResult.withDefaults({
    formatter: error => error.path,
});

const validateLogin = (req, res, next) => {
    let errors = myValidationResult(req).array();
    if(errors.length >= 1) return res.status(400).send({ status : 400, message:[...errors]});
    else return next(); 
}

export {
    validateLogin
}