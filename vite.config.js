import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        carwash: 'carwash.html',
        flow:    'index.html',
      },
    },
  },
  plugins: [
    // Copy static assets that are referenced by URL strings in JS (not by import).
    // GLB models, audio files, and the one loose image are not processed by Rollup
    // and must be copied verbatim into the dist folder under their original paths.
    viteStaticCopy({
      targets: [
        { src: '_assets/_objects',             dest: '_assets' },
        { src: '_assets/_audio',               dest: '_assets' },
        { src: '_assets/_style/_images',       dest: '_assets/_style' },
        { src: '_assets/GHqNiZED0D7B07TNyLJq2TgGYOyY8AVu47S2AKTU.jpg', dest: '_assets' },
      ],
    }),
  ],
});
