<script context="module">
  export const prerender = true
</script>

<script>
  import { base } from '$app/paths'
  import { language } from '$lib/Scripts/vars'
  export let Content
  export let button
  export let title
  export let description
  export let keywords
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
</svelte:head>

<div class="container">
  <svelte:component this={Content} />
</div>

<a
  data-sveltekit-prefetch
  class="button"
  rel="noopener noreferrer"
  href={($language === 'en' ? base : base + '/' + $language) + '/gafalt/'}
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
