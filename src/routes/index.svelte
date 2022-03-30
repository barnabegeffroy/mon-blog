<script context="module" lang="ts">
	export const prerender = true;
</script>
<script>
	import { base } from '$app/paths';
</script>
<h1>Welcome to SvelteKit</h1>
<a sveltekit:prefetch href="{base}/about">About</a>