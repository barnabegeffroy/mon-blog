<script>
  import { onMount } from 'svelte'

  let container

  export let name

  onMount(() => {
    let scriptEl = document.createElement('script')
    scriptEl.setAttribute('src', 'https://utteranc.es/client.js')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    scriptEl.setAttribute('async', 'true')
    scriptEl.setAttribute('repo', 'barnabegeffroy/mon-blog')
    scriptEl.setAttribute('issue-term', name)
    scriptEl.setAttribute('theme', 'github-light')
    scriptEl.setAttribute('label', 'comment')
    container.appendChild(scriptEl)
  })
</script>

<div>
  <h4>Un commentaire ? Une autre alternative à proposer ? C'est par ici !</h4>
  <div bind:this={container} />
</div>

<style>
  h4 {
    margin: 0;
  }
</style>
