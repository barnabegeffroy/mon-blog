<script>
  import Manifesto from '$lib/Pages/Manifesto.svelte'
  import Pourquoi from '../../../data/fr/pourquoi.md'
  let button = 'Voir les alternatives éthiques du numérique'
</script>

<Manifesto Content={Pourquoi} {button} />
