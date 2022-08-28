<script context="module" lang="ts">
  export const prerender = true
  import { base } from '$app/paths'
</script>

<script>
  import Grid from '$lib/Components/Grid.svelte'
  import Comment from '$lib/Components/Comment.svelte'
  export let services
  export let title
  export let configure
  export let configureDescription
  export let replace
  export let replaceDescription
  export let language
  export let servicesTitle
  export let Actions
  export let Ressources
  export let comment
</script>

<h1>{title}</h1>

<div class="content">
  <p>{configureDescription}</p>
  <div class="articles">
    <a
      sveltekit:prefetch
      class="button"
      href={base + '/' + language + '/aller-plus-loin/blog/firefox'}
    >
      {configure} Firefox
    </a>
    <a
      sveltekit:prefetch
      class="button"
      href={base + '/' + language + '/aller-plus-loin/blog/android'}
    >
      {configure} Android
    </a>
    <a
      sveltekit:prefetch
      class="button"
      href={base + '/' + language + '/aller-plus-loin/blog/iphone'}
    >
      {configure} iPhone
    </a>
    <a
      sveltekit:prefetch
      class="button"
      href={base + '/' + language + '/aller-plus-loin/blog/windows'}
    >
      {configure} Windows
    </a>
    <a
      sveltekit:prefetch
      class="button"
      href={base + '/' + language + '/aller-plus-loin/blog/mac'}
    >
      {configure} Mac
    </a>
  </div>

  <p>{replaceDescription}</p>
  <div class="articles">
    <a
      sveltekit:prefetch
      class="button"
      href={base + '/' + language + '/aller-plus-loin/blog/linux'}
    >
      {replace} Windows
    </a>
    <a
      sveltekit:prefetch
      class="button"
      href={base + '/' + language + '/aller-plus-loin/blog/eos'}
    >
      {replace} Android
    </a>
  </div>

  <h2>{servicesTitle}</h2>
  <Grid applis={services} source="services" />

  <svelte:component this={Actions} />

  <svelte:component this={Ressources} />

  <Comment name={comment} />
</div>

<style>
  .articles {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
  .content {
    width: 70%;
  }
</style>
