<script>
	import { base } from '$app/paths';
	import Comment from '$lib/Comment.svelte';

	export let title;
	export let date;
	export let source;
	export let file;
</script>

<div class="title">
	<img src="{base + '/' + file} " alt="{title}-logo" width="200px" />
	<h1>{title}</h1>
	{#if source}
		<a href={source} target="_blank" class="button">Code source</a>
	{/if}
	<p class="date">Publié le {date}</p>
</div>

<slot />

<Comment name={title} />

<style>
	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5%;
	}

	@media (min-width: 700px) {
		.button {
			position: absolute;
			right: 10%;
			top: 20%;
			width: 5%;
		}
		.date {
			position: absolute;
			left: 10%;
			top: 20%;
			color: rgb(134, 134, 134);
		}
	}

</style>
