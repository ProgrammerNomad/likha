import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@likha/core': path.resolve(__dirname, '../core/src/index.ts'),
      '@likha/plugins': path.resolve(__dirname, '../plugins/src/index.ts'),
      '@likha/ui': path.resolve(__dirname, '../ui/src/index.ts')
    },
    dedupe: [
      'prosemirror-model',
      'prosemirror-state',
      'prosemirror-view',
      'prosemirror-transform',
      'prosemirror-commands',
      'prosemirror-keymap',
      'prosemirror-history',
      'prosemirror-schema-list',
      'prosemirror-schema-basic',
      'prosemirror-inputrules'
    ]
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'LikhaEditor',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => {
        if (format === 'es') return 'index.js';
        if (format === 'cjs') return 'index.cjs';
        return 'likha-editor.umd.js';
      }
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    },
    sourcemap: true,
    minify: 'terser'
  }
});
