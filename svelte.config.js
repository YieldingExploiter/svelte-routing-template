import sveltePreprocess from 'svelte-preprocess'
import fs from 'fs'

const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  build: {
    base: fs.existsSync('.root-path') ? fs.readFileSync('.root-path', 'utf-8').trim() : '/'
  }
}

console.log('Base Path:',config.base);

export default config