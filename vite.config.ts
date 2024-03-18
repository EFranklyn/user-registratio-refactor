import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import electron from 'vite-plugin-electron/simple'
export default defineConfig({
  
  plugins: [
    vue(),
    electron({
      main: {
        entry: 'electron/main.ts',
        vite: {
          build: {
            minify: true,
            outDir: 'dist/main',
            // rollupOptions: {
            //   external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
            // },
          },
        },
      },
      preload: {
        input: 'electron/preload.ts',
        vite: {
          build: {
            minify: true,
            outDir: 'dist/preload',
            // rollupOptions: {
            //   external: Object.keys('dependencies' in pkg ? pkg.dependencies : {}),
            // },
          },
        },
      },
    }),
  ],
});