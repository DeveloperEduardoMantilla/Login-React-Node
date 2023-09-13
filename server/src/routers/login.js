import {Router} from "express";
import routesVersioning from "express-routes-versioning";
import {loginUsuario} from "../support/v1.usuario.js";
import {limitApi} from "../limits/limit.js";


const appLogin = Router();
const version = routesVersioning();
appLogin.use(limitApi())

appLogin.get("/", version(loginUsuario));

export default appLogin; 
