import {Router} from "express";
import routesVersioning from "express-routes-versioning";
import {loginUsuario} from "../support/v1.usuario.js";
import {limitApi} from "../limits/limit.js";
import {dtoLogin} from "../storage/login.dto.js";
import {validateLogin} from "../storage/validateLogin.js";
const appLogin = Router();
const version = routesVersioning();

appLogin.use(limitApi())

appLogin.post("/",dtoLogin, validateLogin, version(loginUsuario));

export default appLogin; 
