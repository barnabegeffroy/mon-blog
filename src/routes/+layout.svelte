<script>
  import '../app.css'
  import '../applis-sprite.css'
  import '../services-sprite.css'
  import { onMount } from 'svelte'
  import { base } from '$app/paths'
  import { language, init } from '$lib/Scripts/vars'

  let savevar = false

  $: if (savevar && $language && $init) {
    window.sessionStorage.setItem('storeLang', JSON.stringify($language))
    window.sessionStorage.setItem('storeInit', JSON.stringify($init))
  }

  onMount(async () => {
    let sesLang = window.sessionStorage.getItem('storeLang')
    let sesInit = window.sessionStorage.getItem('storeInit')
    if (sesLang) {
      $language = JSON.parse(sesLang)
    }
    if (sesInit) {
      $init = JSON.parse(sesInit)
    }
    savevar = true

    if (!$init) {
      $language = window.navigator.language.substring(0, 2)
      var pathname = window.location.pathname
      if (
        ($language === 'en' &&
          pathname.match('[/][a-z]{2}[/]') === null &&
          pathname.match('[/][a-z]{2}$') === null) ||
        ($language != 'en' && pathname.match(base + '/' + $language) != null)
      ) {
        $init = true
      } else if (pathname.match('/mon-blog/[a-z]{2}$') != null) {
        window.location = base + ($language === 'en' ? '' : '/' + $language)
        $init = true
      } else {
        var index = pathname.match('[/][a-z]{2}[/]') === null ? 9 : 12
        var path =
          $language == 'en'
            ? pathname.substring(index)
            : '/' + $language + pathname.substring(index)
        window.location = base + path
        $init = true
      }
    }
    document.documentElement.setAttribute('lang', $language)
  })

  function stick() {
    document.getElementsByTagName('main')[0].style.top = '0px'
  }
</script>

<slot />

<svelte:window on:scroll={stick} />
