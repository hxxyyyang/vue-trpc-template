import { defineConfig } from 'tsup'

export default [
  defineConfig({
    entry: ['server.ts'],
    outDir: 'dist',
    target: 'ES2022',
    format: ['esm'],
    splitting: false,
    clean: true,
  }),
  defineConfig({
    entry: ['src/index.ts'],
    outDir: 'dist',
    format: ['esm'],
    splitting: false,
    clean: true,
    dts: {
      only: true,
    },
  }),
]
