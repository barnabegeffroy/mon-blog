<script>
  import Gafalt from '$lib/Pages/Gafalt.svelte'

  import Info from '../../data/fr/pages/info.md'
  import applis from '../../data/fr/applis.json'

  let title = 'Les alternatives aux GAFAM'
  let banner = 'Important ! Comment bien choisir ses alternatives ?'
</script>

<Gafalt {title} {banner} {applis} {Info} />
