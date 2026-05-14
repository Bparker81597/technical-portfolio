import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        work: resolve(__dirname, 'work.html'),
        interactive: resolve(__dirname, 'interactive.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
    copyPublicDir: true,
  },
  publicDir: 'public',
})
