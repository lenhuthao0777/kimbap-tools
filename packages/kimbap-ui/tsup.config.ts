import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  clean: true,
  target: 'es2019',
  format: ['cjs', 'esm'],
  external: ['react'],
  ...options,
}));