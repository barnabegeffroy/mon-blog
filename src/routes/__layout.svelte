<script lang="ts">
  import Header from '$lib/Layouts/Header.svelte'
  import '../app.css'
  import '../sprite.css'
  import { beforeUpdate } from 'svelte'

  let page
  beforeUpdate(() => {
    page = window.location.pathname
  })

  function stick() {
    document.getElementsByTagName('main')[0].style.top = '0px'
  }
</script>

<Header {page} />
<main>
  <slot />
</main>

<footer>
  <p>
    <a href="https://github.com/barnabegeffroy/mon-blog" target="_blank"
      >Code source du blog</a
    >
  </p>
</footer>

<svelte:window on:scroll={stick} />

<style>
  main {
    top: -45px;
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 45px auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    margin-top: auto;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 40px 0;
    }
  }
</style>
