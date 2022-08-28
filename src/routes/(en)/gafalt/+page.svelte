<script>
  import Gafalt from '$lib/Pages/Gafalt.svelte'

  import Info from '../../../data/en/pages/info.md'
  import applis from '../../../data/en/applis.json'

  let title = "GAFAMs' alternatives"
  let banner = 'Important ! How to well choose your alternatives ?'
</script>

<Gafalt {title} {banner} {applis} {Info} />
