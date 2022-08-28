<script context="module">
  export const prerender = true
</script>

<script>
  import Appli from '$lib/Components/Appli.svelte'
  import Switch from '$lib/Components/Switch.svelte'
  import Modal from '$lib/Components/Modal.svelte'
  export let applis
  export let source
  let showModal = true
  let isOpen = false
  let currentApp = applis[0]
</script>

<div class="switch">
  <p>Descriptions</p>
  <Switch bind:checked={showModal} />
</div>

<div class="container">
  {#each applis as appli}
    <Appli
      {appli}
      {source}
      {showModal}
      bind:isOpenModal={isOpen}
      bind:currentApp
    />
  {/each}
</div>

<Modal bind:isOpenModal={isOpen} {source} appli={currentApp} />

<style>
  .container {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
  }
  .switch {
    display: flex;
  }
  p {
    font-size: x-large;
  }
  .switch > p {
    margin: 0% 2% 3% 0%;
  }
</style>
