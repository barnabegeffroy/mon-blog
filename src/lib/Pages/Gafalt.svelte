<script context="module">
  export const prerender = true
  import { base } from '$app/paths'
</script>

<script>
  import { language } from '$lib/Scripts/vars'
  import Grid from '$lib/Components/Grid.svelte'
  import Comment from '$lib/Components/Comment.svelte'
  export let applis
  export let banner
  export let title
  export let moreButton
  export let Info
  export let comment
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div>
  <h1>{title}</h1>

  <details>
    <summary>{banner}</summary>
    <svelte:component this={Info} />
  </details>
  <Grid {applis} source="applis" />

  <a
    data-sveltekit-prefetch
    class="button"
    href={($language === 'en' ? base : base + '/' + $language) + '/more'}
    >{moreButton}</a
  >

  <Comment name={comment} />
</div>

<style>
  a {
    justify-content: center;
    display: flex;
    margin: 5% 25% 5% 25%;
    font-weight: bold;
  }
</style>
