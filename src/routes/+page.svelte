<script>
	import Counter from './Counter.svelte';

	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="dashboard" />
</svelte:head>

<ul>
	{#each data.accounts as account}
		<li>{account.note}</li>
	{/each}
</ul>

<section>
	<h1 class="text-3xl font-bold underline">
		Dashboard
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
