import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/generate': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/image': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/auth/signup': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/auth/login': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/orders': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
