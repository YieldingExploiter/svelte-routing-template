<!-- modified variant of the one found in the build output of svelte-routing -->
<script>
  import { baseRoute } from '../BaseRoute';
  import { getContext, createEventDispatcher } from 'svelte';
  import { ROUTER, LOCATION } from 'svelte-routing/src/contexts';
  import { navigate } from 'svelte-routing/src/history.js';
  import {
    startsWith,
    resolve,
    shouldNavigate,
  } from 'svelte-routing/src/utils.js';

  export let to = '#';
  export let replace = false;
  export let state = {};
  export let getProps = () => ({});

  const { base } = getContext(ROUTER);
  const location = getContext(LOCATION);
  const dispatch = createEventDispatcher();

  let href, isPartiallyCurrent, isCurrent, props;
  $: href = `${baseRoute}${to === '/' ? $base.uri : resolve(to, $base.uri)}`;
  $: isPartiallyCurrent = startsWith($location.pathname, href);
  $: isCurrent = href === $location.pathname;
  $: ariaCurrent = isCurrent ? 'page' : undefined;
  // @ts-ignore
  $: props = getProps({
    location: $location,
    href,
    isPartiallyCurrent,
    isCurrent,
  });

  function onClick(event) {
    dispatch('click', event);

    if (shouldNavigate(event)) {
      event.preventDefault();
      // Don't push another entry to the history stack when the user
      // clicks on a Link to the page they are currently on.
      const shouldReplace = $location.pathname === href || replace;
      navigate(href, { state, replace: shouldReplace });
    }
  }
</script>

<a
  {href}
  aria-current={ariaCurrent}
  on:click={onClick}
  {...props}
  {...$$restProps}
>
  <slot />
</a>
