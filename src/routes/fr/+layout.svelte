<script>
  import Header from '$lib/Layouts/Header.svelte'
  import Footer from '$lib/Layouts/Footer.svelte'

  const navItems = [
    { label: 'Accueil', href: '' },
    { label: 'Pourquoi une transition ?', href: 'manifesto' },
    { label: 'GAFAlternative', href: 'gafalt' },
    { label: 'Aller plus loin', href: 'more' },
  ]

  const footer = 'Code source du blog'
</script>

<Header {navItems} />
<main>
  <slot />
</main>

<Footer content={footer} />
