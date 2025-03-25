import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {  // Change this to your API route prefix
        target: 'https://bistrobliss-bacckend.onrender.com',  // Backend server URL
        changeOrigin: true,
        secure: false, // Set to `true` if backend is HTTPS and has a valid SSL certificate
        rewrite: (path) => path.replace(/^\/api/, '') // Optional: Rewrite API path
      }
    }
}});
