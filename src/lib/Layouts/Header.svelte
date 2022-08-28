<script>
  import { base } from '$app/paths'

  let showMobileMenu = false
  export let page
  export let navItems
  export let language

  const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu)

  function stick() {
    var navbar = document.getElementById('navbar')
    var sticky = navbar.offsetTop
    if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky')
    } else {
      navbar.classList.remove('sticky')
    }
  }
  const languages = [
    { name: '🇬🇧️ English', code: 'en' },
    { name: '🇨🇵️ Français', code: 'fr' },
  ]
</script>

<nav id="navbar">
  <div class="inner">
    <div
      on:click={handleMobileIconClick}
      class={`mobile-icon${showMobileMenu ? ' active' : ''}`}
    >
      <div class="middle-line" />
    </div>
    <div />
    <div class="items">
      <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
        {#each navItems as item}
          <li
            on:click={showMobileMenu ? handleMobileIconClick : null}
            class:active={page ===
              (language === 'en' ? base : base + '/' + language) + item.href ||
              page ===
                (language === 'en' ? base : base + '/' + language) +
                  '/' +
                  item.href}
          >
            <a
              sveltekit:prefetch
              href={(language === 'en' ? base : base + '/' + language) +
                '/' +
                item.href}>{item.label}</a
            >
          </li>
        {/each}
      </ul>
    </div>
    <select
      bind:value={language}
      on:change={() =>
        (window.location.href =
          language === 'en' ? base + '/' : base + '/' + language)}
    >
      {#each languages as lang}
        <option value={lang.code} selected={lang.code === language}
          >{lang.name}</option
        >
      {/each}
    </select>
  </div>
</nav>

<svelte:window on:scroll={stick} />

<style>
  #navbar {
    z-index: 2;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.8);
    height: 45px;
  }

  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }

  li.active > a {
    font-weight: 700;
    color: var(--accent-color);
  }
  .inner {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: color 0.2s linear;
  }
  .mobile-icon {
    width: 25px;
    height: 14px;
    position: relative;
    cursor: pointer;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--heading-color);
    transition: all 0.4s;
    transform-origin: center;
  }

  .mobile-icon:before,
  .middle-line {
    top: 0;
  }

  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }

  .mobile-icon:before {
    width: 66%;
  }

  .mobile-icon:after {
    width: 33%;
  }

  .middle-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after,
  .mobile-icon.active:before,
  .mobile-icon.active:after,
  .mobile-icon.active .middle-line {
    width: 100%;
  }

  .mobile-icon.active:before,
  .mobile-icon.active:after {
    top: 50%;
    transform: rotate(-45deg);
  }

  .mobile-icon.active .middle-line {
    transform: rotate(45deg);
  }

  .navbar-list {
    display: none;
    width: 100%;
    justify-content: space-between;
    margin: 0;
    padding: 0 40px;
  }

  .navbar-list.mobile {
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    display: block;
    height: calc(100% - 45px);
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  .navbar-list li {
    list-style-type: none;
    position: relative;
  }

  .navbar-list li:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(255, 255, 255, 0.9);
  }

  .navbar-list a {
    color: var(--heading-color);
    text-decoration: none;
    display: flex;
    height: 45px;
    align-items: center;
    padding: 0 40px;
    font-size: 13px;
  }

  @media only screen and (min-width: 767px) {
    .mobile-icon {
      display: none;
    }
    .inner {
      justify-content: center;
    }
    .navbar-list {
      display: flex;
      padding: 0;
    }

    .navbar-list a {
      display: inline-flex;
    }
  }

  select {
    position: fixed;
    right: 0px;
    height: 45px;
    background-color: var(--accent-color);
    color: white;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border: 2px solid var(--accent-color);
    border-radius: 12px;
  }
  select:hover {
    color: var(--accent-color);
    background-color: transparent;
  }
</style>
