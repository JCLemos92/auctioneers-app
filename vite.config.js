import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'lcov'],
      exclude: ['node_modules/'],
    },
  },
});
