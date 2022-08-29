<script>
  import Home from '$lib/Pages/Home.svelte'
  import Content from '../../data/fr/pages/home.md'

  const manifest = 'Pourquoi une transition est nécessaire ?'
  const gafalt = 'Les alternatives éthiques du numérique'
</script>

<Home {Content} {manifest} {gafalt} />
