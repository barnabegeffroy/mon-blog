<script>
  import More from '$lib/Pages/More.svelte'

  import services from '../../../data/en/services.json'
  import Ecogestes from '../../../data/fr/pages/ecogestes.md'
  import Ressources from '../../../data/fr/pages/ressources.md'

  let title = 'Pour aller plus loin'
  let configure = 'Configurer son'
  let configureDescription =
    'Vous pouvez configurer vos différentes applications et appareils pour ajouter **davantage de confidentialité** et **supprimer les publicités et pisteurs**.'
  let replace = 'Remplacer'
  let replaceDescription =
    'Si vos appareils le permettent, vous pouvez également **remplacer Windows et Android** par des systèmes **open source** plus respectueux de la vie privée.'
  let servicesTitle =
    "D'autres services alternatifs liés au numérique et à la vie privée"
</script>

<More
  {title}
  {services}
  {configure}
  {configureDescription}
  {replace}
  {replaceDescription}
  {servicesTitle}
  Actions={Ecogestes}
  {Ressources}
  comment="aller-plus-loin"
/>
