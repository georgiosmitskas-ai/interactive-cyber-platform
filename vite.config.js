import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: 'base' must match your repo name
// and 'outDir' must be 'docs' for GitHub Pages.
export default defineConfig({
  base: '/interactive-cyber-platform/',
  plugins: [react()],
  build: {
    outDir: 'docs'
  }
})