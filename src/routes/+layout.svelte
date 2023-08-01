<script>
	import Header from './header/header.svelte';
	import './styles.css';
</script>

<div class="flex flex-col md:ml-64 bg-gray-50 dark:bg-gray-900 min-h-screen">
	<Header />

	<main class="flex flex-col w-full mx-auto box-border">
		<slot />
	</main>

	<footer class="flex flex-row p-4 justify-center">
		<p>2023</p>
	</footer>
</div>
