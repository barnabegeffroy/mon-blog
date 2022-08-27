<script context="module" lang="ts">
  export const prerender = true
</script>

<script>
    export let language
    import { base } from '$app/paths'
</script>
<div class="container">
  <slot name="content">No content provided</slot>
</div>

<a sveltekit:prefetch class="button" href={base + '/' + language + '/gafalt'}
  ><slot name="button">No content provided</slot></a
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
