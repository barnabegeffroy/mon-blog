<script>
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
    { label: 'Accueil', href: '' },
    { label: 'Pourquoi une transition ?', href: 'manifesto' },
    { label: 'GAFAlternative', href: 'gafalt' },
    { label: 'Aller plus loin', href: 'more' },
  ]

  const footer = 'Code source du blog'
</script>

<Header {page} {navItems} />
<main>
  <slot />
</main>

<Footer content={footer} />

<svelte:window on:scroll={stick} />
