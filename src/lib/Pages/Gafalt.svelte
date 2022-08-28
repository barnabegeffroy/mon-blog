<script context="module" lang="ts">
  export const prerender = true
</script>

<script>
  import Grid from '$lib/Components/Grid.svelte'
  import Comment from '$lib/Components/Comment.svelte'
  export let applis
  export let banner
  export let title
  export let Info
  export let comment
</script>

<div>
  <h1>{title}</h1>

  <details>
    <summary>{banner}</summary>
    <svelte:component this={Info} />
  </details>
  <Grid {applis} source="applis" />
  <Comment name={comment} />
</div>
