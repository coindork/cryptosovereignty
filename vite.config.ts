import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  base: '/cryptosovereignty/',
  publicDir: 'public',
  build: { outDir: 'dist' },
  server: { open: true },
})
