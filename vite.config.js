import { defineConfig } from 'vite';

export default defineConfig({
  // When deploying to GitHub Pages under a repository (username.github.io/<repo>),
  // set base to the repository name so built asset URLs are correct.
  // Replace 'aehnlich_wie_tetris' with your repo name if it differs.
  base: '/aehnlich_wie_tetris/',
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