<script lang="ts">
	import { base } from '$app/paths';
	import { fade } from 'svelte/transition';
	import { create_in_transition } from 'svelte/internal';

	export let appli;
	export let currentApp;
	export let showModal;
	export let isOpenModal;

	let name = appli.appname;
	let file = appli.appfile;
	function openModal() {
		isOpenModal = true;
	}

	let element;
	let intro;
	function animate() {
		name = name == appli.appname ? appli.altname : appli.appname;
		file = file == appli.appfile ? appli.altfile : appli.appfile;
		intro = create_in_transition(element, fade, { duration: 1000 });
		intro.start();
		if (showModal) {
			currentApp = appli;
			setTimeout(openModal, 1000);
		}
	}
</script>

<div class="app-body" bind:this={element}>
	<span class="notification">
		<span class="badge"
			><img src={base + '/' + file} alt={appli.appname + 'logo'} width="20px" /></span
		>
		<img src={base + '/' + file} class="target" alt={appli.appname + 'logo'} on:click={animate} />
	</span>
	<h4 class="app-name">{name}</h4>
</div>

<style>
	.notification {
		position: relative;
	}
	.badge {
		background-color: red;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 25px;
		width: 25px;
		margin-left: 110px;
		top: 20px;
		right: 10px;
		padding: 10px;
		z-index: 1;
		position: inherit;
		border-radius: 50%;
	}
	.app-body {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 2%;
	}
	.app-name {
		margin-top: 1%;
	}

	.target {
		display: flex;
		justify-content: center;
		border-radius: 1.5em;
		position: relative;
		text-align: center;
		width: 120px;
		height: 120px;
		transform: translate3d(0, 0, 0);
		z-index: 0;
		background-color: white;
	}
	@media (max-width: 775px) {
		.target {
			width: 90px;
			height: 90px;
		}
	}
</style>
