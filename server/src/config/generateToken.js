import jwt from "jsonwebtoken"
import dotenv from "dotenv"; 

dotenv.config();

const generateToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, process.env.JWT_PRIVATE_KEY, {algorithm: "HS256", expiresIn: "1h"}, (err, token) => {
            err ? reject(err) : resolve(token)
        })
    })
}

export {generateToken}