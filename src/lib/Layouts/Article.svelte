<script>
    import Toc from 'svelte-toc'
  export let title
  export let sommaire
</script>

<div class="content">
  <h1>{title}</h1>

  {#if sommaire }
    <div>
      <Toc 
      title="Sommaire" 
      breakpoint=0
      headingSelector=":is(h2, h3, h4):not(.toc-exclude)" 
      --toc-active-bg="none"
      activeHeadingScrollOffset=30
      />
    </div>
  {/if}
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
