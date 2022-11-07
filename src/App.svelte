<script lang="ts">
  // imported routes
  import index from './routes/index.svelte';
  import other from './routes/other.svelte';

  // route list
  const Routes: Record<string, any> = {
    other: other,
    '/': index, // index should be last!
  };

  // routing + whatnot
  import { Router, Route } from 'svelte-routing';
  export let url = '';
</script>

<Router {url}>
  <nav>
    <!-- optionally put a navbar here -->
  </nav>
  <div>
    {#each Object.entries(Routes) as [path, Page]}
      <Route {path}><Page /></Route>
    {/each}
  </div>
</Router>
