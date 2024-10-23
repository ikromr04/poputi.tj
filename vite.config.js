import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js', 'resources/js/admin/main.tsx'],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      '@': '/resources/js/admin',
    },
  },
});
