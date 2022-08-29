<script>
  import Manifesto from '$lib/Pages/Manifesto.svelte'
  import Why from '../../../data/en/pages/why.md'
  let button = 'See the ethical alternatives'
</script>

<Manifesto Content={Why} {button} />
