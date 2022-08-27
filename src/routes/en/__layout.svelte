<script lang="ts">
  import Header from '$lib/Layouts/Header.svelte'
  import Footer from '$lib/Layouts/Footer.svelte'
  import { beforeUpdate } from 'svelte'

  let page
  beforeUpdate(() => {
    page = window.location.pathname
  })

  function stick() {
    document.getElementsByTagName('main')[0].style.top = '0px'
  }

  const navItems = [
    { label: 'Home', href: '' },
    { label: 'Why change ?', href: 'why' },
    { label: 'GAFAlternative', href: 'gafalt' },
    { label: 'Go further', href: 'more' },
  ]
  const language = 'en'

  const footer = 'Code source du blog'
</script>

<Header {page} {navItems} {language} />

<main>
  <slot />
</main>

<Footer content={footer} />

<svelte:window on:scroll={stick} />
