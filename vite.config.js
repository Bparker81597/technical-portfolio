import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/technical-portfolio/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
})
