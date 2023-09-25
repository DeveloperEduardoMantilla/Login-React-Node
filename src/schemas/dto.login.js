import * as Yup from "yup"; 

const validateLoginFrontend = Yup.object().shape({
    user: Yup.string("User invalido").required("Parametro email es obligatorio"),
    password: Yup.string("password invalido").matches("^[A-Za-z0-9]+$", "contraseña invalida!").required("Parametro password es obligatorio!")
})

export {
    validateLoginFrontend
}