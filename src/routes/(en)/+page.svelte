<script>
  import Home from '$lib/Pages/Home.svelte'
  import Content from '../../data/en/pages/home.md'

  const manifest = 'Why change is necessary ?'
  const gafalt = 'Ethical alternatives'
</script>

<Home {Content} {manifest} {gafalt} />
