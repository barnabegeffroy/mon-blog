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

<style>
  .container {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
