<script context="module" lang="ts">
  export const prerender = true
</script>

<script>
  import Pourquoi from './pourquoi.md'
</script>

<div class="container">
  <Pourquoi />
</div>

<style>
  .container {
    /* width: 70%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 775px) {
    .container {
      /* width: 90%; */
    }
  }
</style>
