<script>
  import Home from '$lib/Pages/Home.svelte'
  import Content from '../../data/fr/pages/home.md'

  const language = 'en'
  const manifest = 'Why change is necessary ?'
  const gafalt = 'Ethical alternatives'
</script>

<Home {Content} {language} {manifest} {gafalt} />
