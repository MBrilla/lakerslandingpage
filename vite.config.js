import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lakerslandingpage/' // Set the base path to match your GitHub Pages URL
})