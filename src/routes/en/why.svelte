<script>
  import Manifest from '$lib/Pages/Manifest.svelte'
  import Why from '../../data/en/pages/why.md'
  let language = 'en'
  let button = 'See the ethical alternatives'
</script>

<Manifest {language} Content={Why} {button} />
