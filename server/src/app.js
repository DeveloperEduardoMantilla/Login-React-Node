import express from 'express';
import dotenv from 'dotenv';
import usuario from './routers/login.js';
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";


dotenv.config();
let appExpress = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIRECTORY = path.join(__dirname, "../../dist");

appExpress.use(cors())
appExpress.use(express.json());
appExpress.use("/validateUsuario", usuario);

appExpress.use(express.static(DIST_DIRECTORY));


let config = JSON.parse(process.env.MY_SERVER)
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`)
})