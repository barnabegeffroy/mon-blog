<script lang="ts">
  import { fade } from 'svelte/transition'
  import { create_in_transition } from 'svelte/internal'

  export let appli
  export let source
  export let currentApp
  export let showModal
  export let isOpenModal

  let name = appli.appname
  let file = appli.appfile
  function openModal() {
    isOpenModal = true
  }

  let element
  let intro
  function animate() {
    showBadge = !showBadge
    name = name == appli.appname ? appli.altname : appli.appname
    file = file == appli.appfile ? appli.altfile : appli.appfile
    intro = create_in_transition(element, fade, { duration: 200 })
    intro.start()
    if (showModal) {
      currentApp = appli
      setTimeout(openModal, 1000)
    }
  }

  function longpress(node, threshold = 500) {
    const handle_mousedown = () => {
      element.style.transform = 'scale(1.05)'

      const timeout = setTimeout(() => {
        node.dispatchEvent(new CustomEvent('longpress'))
      }, threshold)

      const cancel = () => {
        clearTimeout(timeout)
        element.style.transform = 'scale(1)'
        node.removeEventListener('mousemove', cancel)
        node.removeEventListener('mouseup', cancel)
      }

      node.addEventListener('mousemove', cancel)
      node.addEventListener('mouseup', cancel)
    }

    node.addEventListener('mousedown', handle_mousedown)
    return {
      destroy() {
        node.removeEventListener('mousedown', handle_mousedown)
      },
    }
  }

  let showBadge = false
</script>

<div class="app-body" bind:this={element} use:longpress>
  <span class="notification">
    <div>
      <div class="badge" style="display: {showBadge ? 'block' : 'none'};">
        <div class="badge-text">&#x2713;</div>
      </div>
      <i
        class="svg-{file} svg-sprite-icon-{source} target"
        on:click={animate}
      />
    </div>
    <h4 class="app-name">{name}</h4>
  </span>
</div>

<style>
  .notification {
    padding-top: 15px;
    padding-left: 10px;
  }
  .badge {
    background-color: var(--success-color);
    display: flex;
    height: 25px;
    width: 25px;
    padding: 10px;
    z-index: 2;
    left: 95px;
    top: -7px;
    position: absolute;
    border-radius: 50%;
  }

  .badge-text {
    color: white;
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -17px 0 0 -12px;
  }
  .app-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
  }
  .app-name {
    margin-top: 1%;
    width: 120px;
    text-align: center;
  }

  .target {
    display: flex;
    justify-content: center;
    border-radius: 25%;
    position: relative;
    text-align: center;
    transform: translate3d(0, 0, 0);
    z-index: 0;
    background-color: white;
    width: 120px;
    height: 120px;
  }

  @media (max-width: 775px) {
    .target {
      width: 90px;
      height: 90px;
    }

    .app-body {
      margin: 4px 2px;
    }
    .app-name {
      width: 90px;
    }

    .badge {
      height: 15px;
      width: 15px;
      left: 75px;
      top: -3px;
    }

    .badge-text {
      font-size: 20px;
      top: 40%;
      margin: -12px 0 0 -8px;
    }
  }
</style>
