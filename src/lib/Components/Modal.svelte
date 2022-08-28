<script lang="ts">
  import { base } from '$app/paths'
  import Rating from './Rating.svelte'

  export let appli
  export let source
  export let isOpenModal

  function closeModal() {
    isOpenModal = false
  }
  function closeEscape(event) {
    if (event.key == 'Escape') closeModal()
  }
</script>

<svelte:window on:keydown={closeEscape} />
<div
  class="modal"
  style="--display: {isOpenModal ? 'block' : 'none'};"
  on:click|self={closeModal}
>
  <div class="modal-content">
    <div class="modal-header">
      <span class="close" on:click={closeModal}>&times;</span>
      <div class="transition">
        <div class="modal-app-icon">
          <i class="svg-{appli.appfile} svg-sprite-icon-{source}" />
          <h4>{appli.appname}</h4>
        </div>
        <span class="arrow">&rarr;</span>
        <div class="modal-app-icon">
          <i class="svg-{appli.altfile} svg-sprite-icon-{source}" />
          <h4>{appli.altname}</h4>
        </div>
      </div>
      <h2 class="banner">{appli.theme}</h2>
    </div>
    <div class="modal-body">
      <h3>{appli.appname}</h3>
      {@html appli.appcontents}
      <h3>{appli.altname}</h3>
      {@html appli.altcontents}
    </div>
    <div class="modal-footer">
      <h3>Fiche Technique</h3>
    </div>
    <div class="tech">
      <div class="part">
        <div class="rating">
          <p>Expérience :</p>
          <span><Rating rating={appli.ux.rating} /></span>
        </div>
        {@html appli.ux.contents}
      </div>
      <hr />
      <div class="part">
        <div class="rating">
          <p>Installation :</p>
          <span><Rating rating={appli.install.rating} /></span>
        </div>
        {@html appli.install.contents}
      </div>
      <hr />
      <div class="part">
        <div class="rating">
          <p>Transition :</p>
          <span><Rating rating={appli.transition.rating} /></span>
        </div>
        {@html appli.transition.contents}
      </div>
    </div>
    {#if appli.otheralt}
      <div class="modal-footer">
        <h3>D'autres alternatives</h3>
      </div>
      <div class="modal-body">
        {#each appli.otheralt as alt}
          <h4>{alt.appname}</h4>
          {@html alt.contents}
        {/each}
      </div>
    {/if}
    <div class="end-close-button">
      <button on:click={closeModal} class="button">Fermer</button>
    </div>
  </div>
</div>

<style>
  /* The Modal (background) */
  .modal {
    display: var(--display);
    position: fixed; /* Stay in place */
    z-index: 3; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  }

  /* Modal Content */
  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    margin-bottom: 10%;
    padding: 0;
    border: 1px solid #888;
    width: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s;
    border-radius: 12px;
  }

  /* Add Animation */
  @-webkit-keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }

  /* The Close Button */
  .close {
    color: white;
    float: right;
    font-size: 42px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #428542;
    text-decoration: none;
    cursor: pointer;
  }

  .modal-header {
    padding: 5% 3% 0.3% 3%;

    background-color: var(--accent-color);
    color: white;
    border-radius: 12px;
  }
  .banner {
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: xx-large;
  }
  .modal-body {
    padding: 2px 16px;
  }

  .modal-body > h4 {
    font-weight: bold;
    color: var(--link-color);
    font-size: 1.1em;
  }
  .modal-footer {
    padding: 2px 16px;
    background-color: var(--accent-color);
    color: white;
  }

  .modal-footer > h3 {
    color: white;
  }

  .modal-app-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .modal-app-icon > h4 {
    margin-top: 0%;
    margin-bottom: 5%;
    text-align: center;
  }
  .modal-app-icon > i {
    background-color: white;
    border-radius: 25%;
    display: block;
    width: 100px;
    height: 100px;
  }
  .arrow {
    font-size: 90px;
    display: flex;
    align-items: center;
  }
  .transition {
    justify-content: center;
    display: flex;
  }

  .end-close-button {
    display: none;
  }

  .tech {
    display: flex;
  }
  .part {
    flex: 1;
    padding: 2%;
  }
  .rating {
    font-weight: 700;
    font-size: large;
    display: flex;
    flex-wrap: wrap;
  }
  hr {
    border: 1px solid var(--accent-color);
  }

  @media (min-width: 1600px) {
    .rating > p {
      flex: 1;
      margin: 0%;
    }
    .rating > span {
      flex: 1;
    }
  }
  @media (max-width: 1600px) {
    .modal-content {
      margin-bottom: 30%;
    }
    .tech {
      flex-direction: column;
    }
    hr {
      width: 90%;
    }
  }
  @media (max-width: 775px) {
    .modal-content {
      width: 95%;
    }
    .modal-app-icon > i {
      height: 60px;
      width: 60px;
    }
    .arrow {
      font-size: 40px;
    }
    .end-close-button {
      display: flex;
      justify-content: center;
    }
  }

  .flex {
    display: flex;
    justify-content: center;
    margin: 30px;
  }
</style>
