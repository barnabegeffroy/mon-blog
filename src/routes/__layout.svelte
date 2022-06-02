<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '../app.css';
	import { beforeUpdate } from 'svelte';

	let page;
	beforeUpdate(() => {
		page = window.location.pathname;
	});
</script>

<Header {page} />
<main>
	<slot />
</main>

<footer>
	<p>
		<a href="https://github.com/barnabegeffroy/mon-blog" target="_blank">Code source du blog</a>
	</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		margin-top:auto; 
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
