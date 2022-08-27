<script context="module" lang="ts">
  export const prerender = true
</script>

<script>
  import Appli from '$lib/Components/Appli.svelte'
  import Switch from '$lib/Components/Switch.svelte'
  import Modal from '$lib/Components/Modal.svelte'
  export let applis
  export let banner
  export let title
  export let Info
  import Comment from '$lib/Components/Comment.svelte'
  let showModal = true
  let isOpen = false
  let currentApp = applis[0]
</script>

<div>
  <h1>{title}</h1>

  <details>
    <summary>{banner}</summary>
    <svelte:component this={Info} />
  </details>
  <div class="switch">
    <p>Descriptions</p>
    <Switch bind:checked={showModal} />
  </div>

  <div class="container">
    {#each applis as appli}
      <Appli {appli} {showModal} bind:isOpenModal={isOpen} bind:currentApp />
    {/each}
  </div>

  <Modal bind:isOpenModal={isOpen} appli={currentApp} />

  <Comment name="gafalt" />
</div>

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
