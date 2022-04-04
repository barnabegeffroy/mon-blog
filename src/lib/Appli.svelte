<script lang="ts">
	export let appname;
	export let appcolor;

	let isOpenModal = false;

	function openModal() {
		isOpenModal = true;
	}
	function closeModal() {
		isOpenModal = false;
	}
	function closeEscape(event) {
		if (event.key == 'Escape') closeModal();
	}
</script>

<div class="app-body">
	<div class="target" on:click={openModal} style="background-color: {appcolor};" />
	<h4 class="app-name">{appname}</h4>
</div>

<svelte:window on:keydown={closeEscape} />
<div class="modal" style="--display: {isOpenModal ? 'block' : 'none'};" on:click|self={closeModal}>
	<div class="modal-content">
		<div class="modal-header">
			<span class="close" on:click={closeModal}>&times;</span>
			<h2>Modal Header</h2>
		</div>
		<div class="modal-body">
			<p>Some text in the Modal Body</p>
			<p>{appname}</p>
			<p>Some other text...</p>
		</div>
		<div class="modal-footer">
			<h3>Modal Footer</h3>
		</div>
	</div>
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
		border-radius: 1.5em;
		position: relative;
		text-align: center;
		width: 120px;
		height: 120px;
		transform: translate3d(0, 0, 0);
		z-index: 0;
	}

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
		padding: 0;
		border: 1px solid #888;
		width: 80%;
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
		font-size: 28px;
		font-weight: bold;
	}

	.close:hover,
	.close:focus {
		color: #000;
		text-decoration: none;
		cursor: pointer;
	}

	.modal-header {
		padding: 2px 16px;
		background-color: #5cb85c;
		color: white;
	}

	.modal-body {
		padding: 2px 16px;
	}

	.modal-footer {
		padding: 2px 16px;
		background-color: #5cb85c;
		color: white;
	}
</style>
