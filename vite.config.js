import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'info',
  base: "./",
  server: {
    proxy: {
    '/api': {
      target: 'http://159.112.183.190:8080/',
      changeOrigin: true
      },
    }
  },
  plugins: [react()],
})
