<script>
  import Comment from '$lib/Components/Comment.svelte'
  import Toc from 'svelte-toc'
  export let title
  export let description
  export let keywords
  export let name
  export let sommaire
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
</svelte:head>

<div class="content">
  <h1>{title}</h1>

  {#if sommaire}
    <div>
      <Toc
        title="Sommaire"
        breakpoint="0"
        headingSelector=":is(h2, h3):not(.toc-exclude)"
        --toc-active-bg="none"
        --toc-active-color="rgba(0,0,0,0.7)"
        --toc-li-padding="10px"
        activeHeadingScrollOffset="30"
      />
    </div>
  {/if}
  <slot />
</div>

<Comment {name} />

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
