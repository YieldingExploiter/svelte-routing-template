<script lang="ts">
  import Counter from '../lib/Counter.svelte';
  import Link from '../lib/Link.svelte';
</script>

<p>
  Hello World!
  <br />
  This is the file at /src/routes/other.svelte (route /other) - <Link to="/"
    >Go back to index!</Link
  >
  <br />
  P.S: Here's a counter because why not
</p>
<Counter />
