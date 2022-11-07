import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as fs from 'fs'

export const base = fs.existsSync('.root-path') ? fs.readFileSync('.root-path', 'utf-8').trim() : '/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base
})

console.log('Base Path:',base);