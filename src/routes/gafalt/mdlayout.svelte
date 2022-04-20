<script>
	import { base } from '$app/paths';
	import Comment from '$lib/Comment.svelte';

	export let title;
	export let date;
	export let source;
	export let file;
</script>

<div class="title">
	<!-- <img src="{base + '/' + file} " alt="{title}-logo" width="200px" /> -->
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
	.button {
		background-color: #5cb85c;
		border: none;
		color: white;
		padding: 16px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		transition-duration: 0.4s;
		cursor: pointer;
		background-color: #5cb85c;
		color: white;
		border: 2px solid #5cb85c;
		border-radius: 12px;
	}

	.button:hover {
		color: #5cb85c;
		background-color: transparent;
	}
</style>
