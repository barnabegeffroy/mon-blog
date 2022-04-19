<script lang="ts">
	import { base } from '$app/paths';
    import Rating from './Rating.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	export let appli;
	export let isOpenModal;

	function closeModal() {
		isOpenModal = false;
	}
	function closeEscape(event) {
		if (event.key == 'Escape') closeModal();
	}
</script>

<svelte:window on:keydown={closeEscape} />
<div class="modal" style="--display: {isOpenModal ? 'block' : 'none'};" on:click|self={closeModal}>
	<div class="modal-content">
		<div class="modal-header">
			<span class="close" on:click={closeModal}>&times;</span>
			<div class="transition">
				<div class="modal-app-icon">
					<img src={base + '/' + appli.file} alt="" />
					<h4>{appli.name}</h4>
				</div>
				<span class="arrow">&rarr;</span>
				<div class="modal-app-icon">
					<img src={base + '/' + appli.altfile} alt="" />
					<h4>{appli.altname}</h4>
				</div>
			</div>
			<h2 class="banner">{appli.theme}</h2>
		</div>
		<div class="modal-body">
			<h3>{appli.name}</h3>
			<SvelteMarkdown source={appli.appdescription} />
			<h3>{appli.altname}</h3>
			<SvelteMarkdown source={appli.altdescription} />
		</div>
		<div class="modal-footer">
			<h3>Fiche Technique</h3>
		</div>
		<div class="tech">
			<div class="part">
				<div class="rating">
					<p>Expérience :</p>
					<span><Rating rating={appli.ux} /></span>
				</div>
				<SvelteMarkdown source={appli.uxdescription} />
			</div>
			<hr />
			<div class="part">
				<div class="rating">
					<p>Installation :</p>
					<span><Rating rating={appli.instal} /></span>
				</div>
				<SvelteMarkdown source={appli.installdescription} />
			</div>
			<hr />
			<div class="part">
				<div class="rating">
					<p>Transition :</p>
					<span><Rating rating={appli.transition} /></span>
				</div>
				<SvelteMarkdown source={appli.transitiondescription} />
			</div>
		</div>
		{#if appli.otheralt}
			<div class="modal-footer">
				<h3>D'autres alternatives</h3>
			</div>
			<div class="modal-body">
				{#each appli.otheralt as alt}
					<h4>{alt.name}</h4>
					<SvelteMarkdown source={alt.text} />
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	/* The Modal (background) */
	.modal {
		display: var(--display);
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		padding-top: 100px; /* Location of the box */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0, 0, 0); /* Fallback color */
		background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
	}

	/* Modal Content */
	.modal-content {
		position: relative;
		background-color: #fefefe;
		margin: auto;
		margin-bottom: 10%;
		padding: 0;
		border: 1px solid #888;
		width: 50%;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		-webkit-animation-name: animatetop;
		-webkit-animation-duration: 0.4s;
		animation-name: animatetop;
		animation-duration: 0.4s;
	}

	/* Add Animation */
	@-webkit-keyframes animatetop {
		from {
			top: -300px;
			opacity: 0;
		}
		to {
			top: 0;
			opacity: 1;
		}
	}

	@keyframes animatetop {
		from {
			top: -300px;
			opacity: 0;
		}
		to {
			top: 0;
			opacity: 1;
		}
	}

	/* The Close Button */
	.close {
		color: white;
		float: right;
		font-size: 42px;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: #428542;
		text-decoration: none;
		cursor: pointer;
	}

	.modal-header {
		padding: 5% 3% 0.3% 3%;

		background-color: #5cb85c;
		color: white;
	}
	.banner {
		display: flex;
		justify-content: center;
		text-align: center;
		color: white;
		font-weight: 800;
		font-size: xx-large;
	}
	.modal-body {
		padding: 2px 16px;
	}

	.modal-footer {
		padding: 2px 16px;
		background-color: #5cb85c;
		color: white;
	}
	.modal-app-icon > h4 {
		margin-top: 0%;
		margin-bottom: 5%;
		text-align: center;
	}
	.modal-app-icon > img {
		height: 100px;
		background-color: white;
		width: auto;
		border-radius: 1.5em;
	}
	.arrow {
		font-size: 90px;
		display: flex;
		align-items: center;
	}
	.transition {
		justify-content: center;
		display: flex;
	}

	.tech {
		display: flex;
	}
	.part {
		flex: 1;
		padding: 2%;
	}
	.rating {
		font-weight: 700;
		font-size: large;
		display: flex;
		flex-wrap: wrap;
	}
	hr {
		border: 1px solid #5cb85c;
	}

	@media (min-width: 1600px) {
		.rating > p {
			flex: 1;
			margin: 0%;
		}
		.rating > span {
			flex: 1;
		}
	}
	@media (max-width: 1600px) {
		.modal-content {
			margin-bottom: 30%;
		}
		.tech {
			flex-direction: column;
		}
		hr {
			width: 90%;
		}
	}
	@media (max-width: 775px) {
		.modal-content {
			width: 80%;
		}
		.modal-app-icon > img {
			height: 80px;
			width: auto;
		}
		.arrow {
			font-size: 70px;
		}
	}
</style>
