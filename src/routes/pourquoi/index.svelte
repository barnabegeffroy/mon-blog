<script context="module" lang="ts">
  export const prerender = true
  import { base } from '$app/paths'
</script>

<script>
  import Pourquoi from './pourquoi.md'
</script>

<div class="container">
  <Pourquoi />
</div>

<a sveltekit:prefetch class="button" href={base + '/gafalt'}
  >Voir les alternatives éthiques du numérique</a
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
