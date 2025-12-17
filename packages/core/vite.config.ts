import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Likha',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: [
        'prosemirror-model',
        'prosemirror-state',
        'prosemirror-view',
        'prosemirror-transform',
        'prosemirror-commands',
        'prosemirror-keymap',
        'prosemirror-history',
        'prosemirror-schema-basic',
      ],
    },
    sourcemap: true,
    minify: 'terser',
  },
});
