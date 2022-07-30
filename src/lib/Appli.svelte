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
		intro = create_in_transition(element, fade, { duration: 200 });
		intro.start();
		if (showModal) {
			currentApp = appli;
			setTimeout(openModal, 1000);
		}
	}
	
	function longpress(node, threshold = 500) {
		const handle_mousedown = () => {
		element.style.transform = "scale(1.05)";

		const timeout = setTimeout(() => {
			node.dispatchEvent(new CustomEvent('longpress'));
		}, threshold);
	
		const cancel = () => {
			clearTimeout(timeout);
			element.style.transform = "scale(1)";
			node.removeEventListener('mousemove', cancel);
			node.removeEventListener('mouseup', cancel);
		};
	
		node.addEventListener('mousemove', cancel);
		node.addEventListener('mouseup', cancel);
		}
	
		node.addEventListener('mousedown', handle_mousedown);
		return {
		destroy() {
			node.removeEventListener('mousedown', handle_mousedown);
		}
		};
  }
</script>
<div class="app-body" bind:this={element} use:longpress on:longpress="{e => window.location.href=base + '/gafalt/'+appli.altname}">
	<span class="notification">
		<!-- {#if appli.usage == "all"}
		<span class="badge"><img src={base + '/laptop.svg'} alt="" width="30px" /></span>
		<span class="badge2"><img src={base + '/phone.svg'} alt="" width="30px" /></span>
		{:else}
		<span class="badge"><img src={base + (appli.usage == 'desktop' ? '/laptop.svg' : '/phone.svg')} alt="" width="30px" /></span>
		{/if} -->
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
	.app-body.active {
    background-color: #f00;
    -ms-transition-duration: 0.2s;
    -ms-transform: scale(0.95);
    -webkit-transition-duration: 0.2s;
    -webkit-transform: scale(0.95);
    -moz-transition-duration: 0.2s;
    -moz-transform: scale(0.95);
    -o-transition-duration: 0.2s;
    -o-transform: scale(0.95);
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
