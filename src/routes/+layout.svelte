<script>
	import Header from './header/header.svelte';
	import './styles.css';
</script>

<div class="flex flex-col md:ml-64 bg-gray-50 dark:bg-gray-900 min-h-screen">
	<Header />

	<main class="flex flex-col w-full mx-auto box-border">
		<slot />
	</main>

	<footer class="flex flex-col p-4 justify-center">
		2023
	</footer>
</div>

<style>
	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
