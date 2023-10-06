import express from 'express';
import usuario from './routers/login.js';
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";

import {loadEnv } from 'vite'
let env = loadEnv("development", process.cwd(), "VITE")

let appExpress = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIRECTORY = path.join(__dirname, "../../dist");

appExpress.use(cors())
appExpress.use(express.json());
appExpress.use("/validateUsuario", usuario);

appExpress.use(express.static(DIST_DIRECTORY));

let ip=env.VITE_IP_BACKEND;
let port=env.VITE_PORT_BACKEND;

appExpress.listen((ip,port), ()=>{
    console.log(`http://${ip}:${port}`)
})