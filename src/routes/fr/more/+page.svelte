<script>
  import More from '$lib/Pages/More.svelte'

  import services from '../../../data/fr/services.json'
  import Ecogestes from '../../../data/fr/pages/ecogestes.md'
  import Ressources from '../../../data/fr/pages/ressources.md'

  const title = 'Pour aller plus loin'
  const configureTitle =
    'Configurer ses appareils pour plus de sobriété et de vie privée'
  const configure = 'Configurer son'
  const configureDescription =
    'Vous pouvez configurer vos différentes applications et appareils pour ajouter <strong>davantage de confidentialité, de sobriété</strong> et <strong>supprimer les publicités et pisteurs</strong>.'
  const replace = 'Remplacer'
  const replaceDescription =
    'Si vos appareils le permettent, vous pouvez également <strong>remplacer Windows et Android</strong> par des systèmes <strong>open source</strong> plus respectueux de la vie privée.'
  const servicesTitle =
    "D'autres services alternatifs liés au numérique et à la vie privée"
  const deviceTitle = "Je dois changer d'appareil, lequel choisir ?"
  const deviceDescription =
    "Avant toute chose, un changement d'appareils doit s'effectuer en dernier recours. Demandez-vous si ce changement est vraiment utile, essayez d'abord de le réparer s'il est cassé."
  const smartphone = 'Changer votre smartphone'
  const laptop = 'Changer votre ordinateur'
  const contributeTitle = 'Contribuer au monde libre sans coder'
  const contributeDescription =
    "Même si vous n'avez pas les compétences vous pouvez participer au développement de projets open source."
  const contributeButton = 'Contribuer au monde libre'
</script>

<More
  {title}
  {services}
  {configureTitle}
  {configure}
  {configureDescription}
  {replace}
  {replaceDescription}
  {servicesTitle}
  Actions={Ecogestes}
  {deviceTitle}
  {deviceDescription}
  {smartphone}
  {laptop}
  {contributeTitle}
  {contributeDescription}
  {contributeButton}
  {Ressources}
  comment="aller-plus-loin"
/>
