import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
      // Allows connections from any device on the network
    port: 5173,        // Keep the default Vite port
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});
