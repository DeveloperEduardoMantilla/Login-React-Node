import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

let env = loadEnv("development",process.cwd(), "VITE")

export default defineConfig({
  plugins: [react()],
  server:{
  host:env.VITE_MY_SERVER,
  port:env.VITE_PORT 
 }
})
