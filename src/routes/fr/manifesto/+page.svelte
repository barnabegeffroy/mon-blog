<script>
  import Manifesto from '$lib/Pages/Manifesto.svelte'
  import Pourquoi from '../../../data/fr/pourquoi.md'
  let language = 'fr'
  let button = 'Voir les alternatives éthiques du numérique'
</script>

<Manifesto {language} Content={Pourquoi} {button} />
