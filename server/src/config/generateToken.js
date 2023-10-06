import jwt from "jsonwebtoken"
import {loadEnv } from 'vite'

const generateToken = (payload) => {
    let env = loadEnv("development", process.cwd(), "VITE")
    return new Promise((resolve, reject) => {
        jwt.sign(payload, env.VITE_JWT_PRIVATE_KEY, {algorithm: "HS256", expiresIn: "1h"}, (err, token) => {
            err ? reject(err) : resolve(token)
        })
    })
}

export {generateToken}