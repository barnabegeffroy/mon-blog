<script context="module" lang="ts">
	export const prerender = true;
</script>

<script>
	import { base } from '$app/paths';
	import Appli from '$lib/Appli.svelte';
	import applis from '../data/appli.json';
</script>

<h1>Welcome to my blog</h1>

<div class="container">
	{#each applis as appli}
		<Appli appname={appli.name} appcolor={appli.value} />
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		position: relative;
		overflow: hidden;
	}
</style>
