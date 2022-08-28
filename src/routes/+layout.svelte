<script>
  import '../app.css'
  import '../applis-sprite.css'
  import '../services-sprite.css'
  import { onMount } from 'svelte'
  import { varlang } from '$lib/Scripts/varlang'

  let savevar = false

  $: if (savevar && $varlang) {
    window.sessionStorage.setItem('store', JSON.stringify($varlang))
  }

  onMount(async () => {
    let ses = window.sessionStorage.getItem('store')
    if (ses) {
      console.log('sob-- ~ loading ses', ses)
      $varlang = JSON.parse(ses)
    }
    savevar = true
  })
</script>

<slot />
