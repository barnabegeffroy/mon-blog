<script>
	export let title;
	export let date;
	export let source;
</script>

<h1>{title}</h1>

<p>Published: {date}</p>

{#if source}
	Code source : {source}
{/if}

<slot />
