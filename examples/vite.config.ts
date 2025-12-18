import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  resolve: {
    alias: {
      '@likhaeditor/core': resolve(__dirname, '../packages/core/src/index.ts'),
      '@likhaeditor/ui': resolve(__dirname, '../packages/ui/src/index.ts'),
      '@likhaeditor/plugins': resolve(__dirname, '../packages/plugins/src/index.ts'),
    },
  },
  server: {
    port: 3000,
    open: '/demo.html',
  },
  build: {
    outDir: 'dist',
  },
});
