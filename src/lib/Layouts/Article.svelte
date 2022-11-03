<script>
  export let title
</script>

<div class="content">
  <h1>{title}</h1>

  <slot />
</div>

<style>
  .content {
    width: 70%;
  }

  @media (max-width: 775px) {
    .content {
      width: 90%;
    }
  }
</style>
