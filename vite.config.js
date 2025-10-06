import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.JPG'],
  server: {
    host: true,
    port: 3000,
    open: true
  },
  preview: {
    host: true,
    port: 3000
  }
})
