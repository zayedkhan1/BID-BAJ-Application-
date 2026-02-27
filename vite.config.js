import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],


  //post server

   server: {
    proxy: {
      '/api': {
        target: 'http://bidbaj.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  //get server

// server: {
//    proxy: {
//   '/api': {
//     target: 'http://bidbaj.com',
//     changeOrigin: true,
//     secure: false,
//   },
// }
//   },



})


