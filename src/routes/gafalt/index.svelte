<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import Appli from '$lib/Appli.svelte';
	import Switch from '$lib/Switch.svelte';
	import Modal from '$lib/Modal.svelte';
	import applis from '../../data/appli.json';

	let showModal = true;
	let isOpen = false;
	let currentApp = applis[0];
</script>

<h1>Les alternatives aux GAFAM</h1>
<p>Cliquez sur les applications pour découvrir leur alternative !</p>
<div class="switch">
	<p>Activer les descriptions :</p>
	<Switch bind:checked={showModal} />
</div>

<div class="container">
	{#each applis as appli}
		<Appli {appli} {showModal} bind:isOpenModal={isOpen} bind:currentApp={currentApp} />
	{/each}
</div>

<Modal bind:isOpenModal={isOpen} appli={currentApp} />

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
