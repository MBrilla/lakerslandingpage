import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/lakerslandingpage',
  // base: '/lakerslandingpage/' // Comment out or remove this line for Vercel deployment
});