import { defineConfig } from 'tsup';
import { cpSync, mkdirSync } from 'node:fs';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: false,
  outDir: 'dist',
  external: ['react', 'react-dom'],
  onSuccess: async () => {
    mkdirSync('dist/fonts', { recursive: true });
    cpSync('src/styles.css', 'dist/styles.css');
    cpSync('src/fonts', 'dist/fonts', { recursive: true });
  },
});
