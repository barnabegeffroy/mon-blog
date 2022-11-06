<script>
  import Manifesto from '$lib/Pages/Manifesto.svelte'
  import Pourquoi from '../../../data/fr/pages/pourquoi.md'
  const button = 'Voir les alternatives éthiques du numérique'
  const title = 'Pourquoi une transition numérique est nécessaire ?'
</script>

<Manifesto Content={Pourquoi} {title} {button} />
