import { defineConfig } from 'vite'
import postcsspxtoviewport from 'postcss-px-to-viewport'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = (dir: string) => path.join(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          viewportWidth: 3840,
        }),
      ],
    },
  },
  plugins: [vue()],
})
