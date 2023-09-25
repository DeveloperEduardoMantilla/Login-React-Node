import * as Yup from "yup"; 

const validateLoginFrontend = Yup.object().shape({
    user: Yup.string("User invalido").required("Parametro user es obligatorio"),
    password: Yup.string("password invalido").required("Parametro password es obligatorio!")
})

export {
    validateLoginFrontend
}