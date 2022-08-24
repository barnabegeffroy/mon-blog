<script context="module" lang="ts">
  export const prerender = true
  import { base } from '$app/paths'
</script>

<script>
  import Index from './index.md'
</script>

<Index />
<div class="flex">
  <a sveltekit:prefetch class="button" href={base + '/pourquoi'}
    >Pourquoi une transition est nécessaire ?</a
  >
  <a sveltekit:prefetch class="button" href={base + '/gafalt'}
    >Les alternatives éthiques du numériques</a
  >
</div>

<style>
  .flex {
    display: flex;
  }
  a {
    width: 30%;
    margin: 5%;
    font-size: x-large;
  }

  @media (max-width: 775px) {
    .flex {
      flex-direction: column;
      align-items: center;
    }
    a {
      width: 70%;
    }
  }
</style>
