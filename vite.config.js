import { defineConfig } from 'vite';

export default defineConfig({
  // Ensure Vite/Rollup uses the HTML file in the `public/` folder as the entry
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'public/index.html',
    },
  },
  server: {
    open: true,
  },
});