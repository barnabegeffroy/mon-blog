<script context="module">
  export const prerender = true
  import { base } from '$app/paths'
</script>

<script>
  import { language } from '$lib/Scripts/vars'
  export let Content
  export let manifest
  export let gafalt
  export let title
  export let description
  export let keywords
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
</svelte:head>

<svelte:component this={Content} />

<div class="flex">
  <a
    data-sveltekit-prefetch
    class="button"
    rel="noopener noreferrer"
    href={($language === 'en' ? base : base + '/' + $language) + '/manifesto/'}
    >{manifest}</a
  >
  <a
    data-sveltekit-prefetch
    class="button"
    rel="noopener noreferrer"
    href={($language === 'en' ? base : base + '/' + $language) + '/gafalt/'}
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
