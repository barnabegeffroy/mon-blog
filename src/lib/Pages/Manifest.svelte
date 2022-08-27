<script context="module" lang="ts">
  export const prerender = true
</script>

<script>
  export let language
  export let Content
  export let button
  import { base } from '$app/paths'
</script>

<div class="container">
  <svelte:component this={Content} />
</div>

<a sveltekit:prefetch class="button" href={base + '/' + language + '/gafalt'}
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
