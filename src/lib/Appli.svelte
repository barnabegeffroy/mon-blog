<script lang="ts">
	export let appname;
	export let appcolor;
</script>

<div class="app-body">
	<div class="target" style="background-color: {appcolor};" />
	<h4 class="app-name">{appname}</h4>
</div>

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
		align-items: center;
		border-radius: 1.5em;
		position: relative;
		text-align: center;
		width: 120px;
		height: 120px;
		transform: translate3d(0, 0, 0);
		z-index: 0;
	}
</style>
