<script context="module">
  export const prerender = true
</script>

<script>
  import Grid from '$lib/Components/Grid.svelte'
  import Comment from '$lib/Components/Comment.svelte'
  import { language } from '$lib/Scripts/vars'
  import { base } from '$app/paths'

  export let services
  export let title
  export let configure
  export let configureDescription
  export let replace
  export let replaceDescription
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
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) +
        '/more/firefox'}
    >
      {configure} Firefox
    </a>
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) +
        '/more/android'}
    >
      {configure} Android
    </a>
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) +
        '/more/iphone'}
    >
      {configure} iPhone
    </a>
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) +
        '/more/windows'}
    >
      {configure} Windows
    </a>
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) + '/more/mac'}
    >
      {configure} Mac
    </a>
  </div>

  <p>{replaceDescription}</p>
  <div class="articles">
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) +
        '/more/linux'}
    >
      {replace} Windows
    </a>
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) + '/more/eos'}
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
