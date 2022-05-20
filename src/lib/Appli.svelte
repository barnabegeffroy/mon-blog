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
		{#if appli.usage == "all"}
		<span class="badge"><img src={base + '/laptop.svg'} alt="" width="30px" /></span>
		<span class="badge2"><img src={base + '/phone.svg'} alt="" width="30px" /></span>
		{:else}
		<span class="badge"><img src={base + (appli.usage == 'desktop' ? '/laptop.svg' : '/phone.svg')} alt="" width="30px" /></span>
		{/if}
			<img src={base + '/' + file} class="target" alt={appli.appname + 'logo'} on:click={animate} />
			<h4 class="app-name">{name}</h4>
		</span>
</div>

<style>
	.notification {
		position: relative;
		padding-top: 15px;
		padding-left: 10px;
	}
	.badge {
		background-color: red;
		display: flex;
		height: 25px;
		width: 25px;
		padding: 10px;
		z-index: 2;
		left: 95px;
		bottom: 135px;
		position: absolute;
		border-radius: 50%;
	}

	.badge2 {
		background-color: red;
		display: flex;
		height: 25px;
		width: 25px;
		padding: 10px;
		z-index: 1;
		left: 65px;
		bottom: 135px;
		position: absolute;
		border-radius: 50%;
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
		.app-name{
			width: 90px;
		}
	}
</style>
