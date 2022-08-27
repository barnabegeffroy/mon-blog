<script>
  import Manifest from '$lib/Pages/Manifest.svelte'
  import Pourquoi from './pourquoi.md'
  let language = "fr"
</script>

<Manifest {language}>
  <Pourquoi slot="content" />
  <span slot="button">Voir les alternatives éthiques du numérique</span>
</Manifest>
