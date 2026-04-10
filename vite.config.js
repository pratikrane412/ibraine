import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,         // Allows external access (needed for tunnels)
    port: 5173,         // Forces the port to 5173
    allowedHosts: true  // Fixes the "Blocked request" error from Cloudflare
  }
})