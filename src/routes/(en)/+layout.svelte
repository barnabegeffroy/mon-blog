<script>
  import Header from '$lib/Layouts/Header.svelte'
  import Footer from '$lib/Layouts/Footer.svelte'

  const navItems = [
    { label: 'Home', href: '' },
    { label: 'Why change ?', href: 'manifesto' },
    { label: 'GAFAlternative', href: 'gafalt' },
    { label: 'Go further', href: 'more' },
  ]
  const footer = 'Code source du blog'
</script>

<Header {navItems} />

<main>
  <slot />
</main>

<Footer content={footer} />
