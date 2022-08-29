<script context="module">
  export const prerender = true
  import { base } from '$app/paths'
</script>

<script>
  import { language } from '$lib/Scripts/vars'
  export let Content
  export let manifest
  export let gafalt
</script>

<svelte:component this={Content} />
<div class="flex">
  <a
    sveltekit:prefetch
    class="button"
    href={($language === 'en' ? base : base + '/' + $language) + '/manifesto'}
    >{manifest}</a
  >
  <a
    sveltekit:prefetch
    class="button"
    href={($language === 'en' ? base : base + '/' + $language) + '/gafalt'}
    >{gafalt}</a
  >
</div>

<style>
  .flex {
    display: flex;
    align-items: center;
  }
  a {
    width: 30%;
    margin: 5%;
    font-size: x-large;
  }

  @media (max-width: 775px) {
    .flex {
      flex-direction: column;
    }
    a {
      width: 70%;
    }
  }
</style>
