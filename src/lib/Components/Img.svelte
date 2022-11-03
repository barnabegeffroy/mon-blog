<script>
  import { base } from '$app/paths'

  export let file
  export let alt
  export let width
</script>

<a href={base + '/img/' + file} target="_blank" rel="noopener noreferrer">
  <img src={base + '/img/' + file} {alt} {width} />
</a>

<style>
  img {
    margin: 10px;
  }
</style>
