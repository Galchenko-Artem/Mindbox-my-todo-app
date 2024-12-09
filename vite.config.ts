import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mindbox-my-todo-app/',
  server: {
    host: 'localhost', 
    port: 3000
  },
  build: {
    outDir: 'build'
  }
})
