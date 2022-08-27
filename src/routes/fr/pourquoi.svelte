<script>
  import Manifest from '$lib/Pages/Manifest.svelte'
  import Pourquoi from '../../data/fr/pourquoi.md'
  let language = 'fr'
  let button = 'Voir les alternatives éthiques du numérique'
</script>

<Manifest {language} Content={Pourquoi} {button} />
