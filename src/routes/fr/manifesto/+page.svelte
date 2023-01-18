<script>
  import Manifesto from '$lib/Pages/Manifesto.svelte'
  import Pourquoi from '../../../data/fr/pages/pourquoi.md'
  const button = 'Voir les alternatives éthiques du numérique'
  const title = 'Pourquoi une transition numérique est nécessaire ?'
  const description =
    'Le numérique est un espace inévitable, il soulève de nombreux enjeux dans un monde où une transition systémique est nécessaire.'
  const keywords =
    'numérique responsable, sobriété, écologie, green-it, logiciel libre, open source, réchauffement climatique, impact, gafa, gafam, social'
</script>

<Manifesto Content={Pourquoi} {title} {description} {keywords} {button} />
