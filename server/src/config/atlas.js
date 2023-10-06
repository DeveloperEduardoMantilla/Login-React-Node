import { MongoClient } from 'mongodb';
import {loadEnv } from 'vite'

export async function conex(){
    let env = loadEnv("development", process.cwd(), "VITE")
    try {
        const uri = `mongodb+srv://${env.VITE_ATLAS_USER}:${env.VITE_ATLAS_PASSWORD}@cluster0.wzlqqfn.mongodb.net/${env.VITE_ATLAS_DB}`;
        const client = await MongoClient.connect(uri);
        return client.db();
    } catch (error) {
        return {status: 500, message:error.message}
    }
}