<script>
  import Gafalt from '$lib/Pages/Gafalt.svelte'

  import Info from '../../../data/fr/pages/info.md'
  import applis from '../../../data/fr/applis.json'

  const title = 'Les alternatives aux GAFAM'
  const description =
    'Découvrez les alternatives aux applications GAFAM pour tendre vers une sobriété et une souveraineté numérique'
  const keywords =
    'transisition, open source, logiciel libre, application, gafa, changer, sobriété, android, apple, google, microsoft'
  const banner = 'Important ! Comment bien choisir ses alternatives ?'
  const moreButton = 'Allez plus loin dans votre transition'
</script>

<Gafalt
  {title}
  {keywords}
  {description}
  {banner}
  {moreButton}
  {applis}
  {Info}
  comment="gafalt-fr"
/>
