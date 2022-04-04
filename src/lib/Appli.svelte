<script lang="ts">
	export let appname;
	export let appcolor;

	import Modal from '$lib/Modal.svelte';
	let content = appname;
	let isOpenModal = false;
	function openModal() {
		isOpenModal = true;
	}

	function closeModal() {
		isOpenModal = false;
	}
</script>

<div class="app-body">
	<div class="target" on:click={openModal} style="background-color: {appcolor};" />
	<h4 class="app-name">{appname}</h4>
</div>
<Modal {content} {isOpenModal} on:closeModal={closeModal} />

<style>
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
	}
</style>
