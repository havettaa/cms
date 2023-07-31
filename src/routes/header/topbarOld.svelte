<script>
	import { page } from '$app/stores';
	import github from '$lib/images/github.svg';

	function toggleMobileTopbar () {
		let topBarCollapse = document.querySelector("#topbar-collapse");
		if (topBarCollapse) {
			topBarCollapse.classList.toggle("hidden");
			topBarCollapse.classList.toggle("flex");
		}
	}
</script>

<section class="bg-white py-2 md:py-4">
	<div class="container px-4 mx-auto md:flex md:items-center">

		<div class="flex justify-between items-center">
			<a href="/" class="flex font-bold text-xl text-blue-700">
				ABAM Portal
			</a>
			<button
				class="border border-solid border-gray-600 px-3 py-3 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
				on:click={toggleMobileTopbar}>
				<svg class="fill-current h-3 w-3" viewBox="0 0 20 20">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</button>
		</div>

		<div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="topbar-collapse">
			<a href="/about" class="p-2 lg:px-4 md:mx-2 text-white rounded {$page.url.pathname.startsWith('/about') ? 'bg-indigo-600' : 'bg-blue-600'}">
				About</a>
			<a href="/login"
				class="p-2 lg:px-4 md:mx-2 text-blue-600 text-center border border-transparent rounded hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300">
				Login</a>
			<a href="/signup"
				class="flex justify-between items-center lg:px-4 md:mx-2 text-blue-600 text-center border border-solid border-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">
				<img src={github} class="w-8" alt="GitHub" />
				Signup</a>
		</div>
	</div>
</section>

<style>
</style>
