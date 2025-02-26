import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // Ensure React plugin is included
  server: {
    host: "0.0.0.0",  // Allow external access from Docker
    port: 3000,
    strictPort: true,  // Ensures the server doesn't pick a different port
    watch: {
      usePolling: true, // Fixes issues with file watching in Docker
    }
  }
});
