import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(process.env.VITE_APP_MODE),
    },
    server: {
      proxy: {
        '/api': {  // Change this to your API route prefix
          target: 'http://localhost:8888',  // Backend server URL
          changeOrigin: true,
          secure: false, // Set to `true` if backend is HTTPS and has a valid SSL certificate
          rewrite: (path) => path.replace(/^\/api/, '') // Optional: Rewrite API path
        }
      }
    }
  };
});
