<script context="module">
  export const prerender = true
</script>

<script>
  import { base } from '$app/paths'
  import { language } from '$lib/Scripts/vars'
  export let Content
  export let button
</script>

<div class="container">
  <svelte:component this={Content} />
</div>

<a
  sveltekit:prefetch
  class="button"
  href={($language === 'en' ? base : base + '/' + $language) + '/gafalt'}
  >{button}</a
>

<style>
  .container {
    /* width: 70%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .button {
    margin-top: 5%;
  }

  @media (max-width: 775px) {
    .container {
      /* width: 90%; */
    }
  }
</style>
