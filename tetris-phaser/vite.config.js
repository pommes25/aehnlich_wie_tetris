import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      inject: {
        injectOptions: {
          tags: [
            {
              tag: 'script',
              attrs: {
                src: '/src/main.js',
                type: 'module',
              },
            },
            {
              tag: 'link',
              attrs: {
                rel: 'stylesheet',
                href: '/src/styles/main.css',
              },
            },
          ],
        },
      },
    }),
  ],
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});