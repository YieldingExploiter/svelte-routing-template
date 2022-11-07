import sveltePreprocess from 'svelte-preprocess'
import fs from 'fs'

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess(),
  base: fs.existsSync('.root-path') ? `/${fs.readFileSync('.root-path','utf-8').trim()}` : '/'
}
