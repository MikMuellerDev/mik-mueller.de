import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import removeConsole from "vite-plugin-remove-console"
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), removeConsole()],
  build: {
    rollupOptions: {
        input: {
            index: resolve(__dirname, "index.html"),
            404: resolve(__dirname, "404.html"),
        }
    }
  }
})
