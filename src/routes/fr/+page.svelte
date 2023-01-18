<script>
  import Home from '$lib/Pages/Home.svelte'
  import Content from '../../data/fr/pages/home.md'

  const title = 'Les alternatives désirables du monde numérique'
  const description =
    'Un outil pour faciliter la transition numérique vers des alternatives plus éthiques et plus sobres.'
  const keywords =
    'gafa, gafam, alternative, sobriété, éthique, soutenable, écologique, écolo, green-it, responsable, open source, logiciel libre'
  const manifest = 'Pourquoi une transition est nécessaire ?'
  const gafalt = 'Les alternatives éthiques du numérique'
</script>

<Home {Content} {title} {description} {keywords} {manifest} {gafalt} />
