import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/React-Jobs-react-application",
  plugins: [react()],
  server: {
    proxy:{
      '/api': {
        target : 'https://my-json-server.typicode.com/coderPriyanshu007/mockend-json-server',
        changeOrigin :true,
    rewrite: (path) => path.replace(/^\/api/,'')
      }
    }
  },
})
