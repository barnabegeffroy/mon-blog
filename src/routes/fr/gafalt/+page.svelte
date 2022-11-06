<script>
  import Gafalt from '$lib/Pages/Gafalt.svelte'

  import Info from '../../../data/fr/pages/info.md'
  import applis from '../../../data/fr/applis.json'

  const title = 'Les alternatives aux GAFAM'
  const banner = 'Important ! Comment bien choisir ses alternatives ?'
  const moreButton = 'Allez plus loin dans votre transition'
</script>

<Gafalt {title} {banner} {moreButton} {applis} {Info} comment="gafalt-fr" />
