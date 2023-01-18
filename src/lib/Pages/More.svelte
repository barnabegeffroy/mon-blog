<script context="module">
  export const prerender = true
</script>

<script>
  import Grid from '$lib/Components/Grid.svelte'
  import Toc from 'svelte-toc'

  import Comment from '$lib/Components/Comment.svelte'
  import { language } from '$lib/Scripts/vars'
  import { base } from '$app/paths'

  export let services
  export let description
  export let keywords
  export let title
  export let configureTitle
  export let configure
  export let configureDescription
  export let replace
  export let replaceDescription
  export let servicesTitle
  export let Actions
  export let Ressources
  export let comment
  export let deviceTitle
  export let deviceDescription
  export let smartphone
  export let laptop
  export let contributeTitle
  export let contributeDescription
  export let contributeButton
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
</svelte:head>

<h1>{title}</h1>

<div class="content">
  <div>
    <Toc
      title="Sommaire"
      breakpoint="0"
      headingSelector=":is(h2):not(.toc-exclude)"
      --toc-active-bg="none"
      --toc-active-color="rgba(0,0,0,0.7)"
      --toc-li-padding="10px"
      activeHeadingScrollOffset="30"
    />
  </div>

  <h2>{configureTitle}</h2>
  <p>{@html configureDescription}</p>
  <div class="articles">
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) +
        '/more/firefox/'}
    >
      {configure} Firefox
    </a>
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) +
        '/more/android/'}
    >
      {configure} Android
    </a>
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) +
        '/more/iphone/'}
    >
      {configure} iPhone
    </a>
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) +
        '/more/windows/'}
    >
      {configure} Windows
    </a>
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) + '/more/mac/'}
    >
      {configure} Mac
    </a>
  </div>

  <p>{@html replaceDescription}</p>
  <div class="articles">
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) +
        '/more/linux/'}
    >
      {replace} Windows
    </a>
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) + '/more/eos/'}
    >
      {replace} Android
    </a>
  </div>

  <h2>{servicesTitle}</h2>
  <Grid applis={services} source="services" />

  <svelte:component this={Actions} />

  <h2>{deviceTitle}</h2>
  <p>
    {@html deviceDescription}
  </p>
  <div class="articles">
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) +
        '/more/fairphone/'}
    >
      {smartphone}
    </a>
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) + '/more/why/'}
    >
      {laptop}
    </a>
  </div>

  <h2>{contributeTitle}</h2>
  <p>
    {contributeDescription}
  </p>
  <div class="articles">
    <a
      data-sveltekit-prefetch
      class="button"
      href={($language === 'en' ? base : base + '/' + $language) +
        '/more/contribute/'}
    >
      {contributeButton}
    </a>
  </div>

  <svelte:component this={Ressources} />

  <Comment name={comment} />
</div>

<style>
  .articles {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
  .articles > a {
    margin: 0% 2% 2% 2%;
    font-weight: bold;
  }
  .content {
    width: 70%;
  }

  @media (max-width: 775px) {
    .content {
      width: 90%;
    }
  }
</style>
