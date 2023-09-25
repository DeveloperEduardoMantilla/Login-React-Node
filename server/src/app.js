import express from 'express';
import dotenv from 'dotenv';
import usuario from './routers/login.js';
import cors from "cors";

dotenv.config();
let appExpress = express();
appExpress.use(cors())
appExpress.use(express.json());
appExpress.use("/validateUsuario", usuario);

appExpress.use("/",(req,res)=>{
    res.status(404).json({status:"404",message:"Hola Crack, te cuento que no haz establecido una ruta valida."})
})

let config = JSON.parse(process.env.MY_SERVER)
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`)
})