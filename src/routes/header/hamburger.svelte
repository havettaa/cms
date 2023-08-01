<script>
	import { onMount } from 'svelte';

	export function toggleMobileSidebar() {
		document.querySelectorAll('[data-func="sidebarcollapse"]').forEach((e) => {
			e?.classList?.toggle('hidden');
			e?.classList?.toggle('flex');
		});
	}

	onMount(async () => {
		window.addEventListener("togglesidebar", () => {
			console.log("toggle sidebar");
			toggleMobileSidebar();
		});
	});
</script>

<!-- Hamburger -->
<button
	class="fixed md:hidden z-50 top-0 left-0 m-2 rounded-full focus:outline-none focus:shadow-outline-bluem p-2 bg-white shadow-md hover:bg-gray-200 dark:bg-gray-800 text-blue-600 dark:text-blue-300"
	data-click="toggleSideMenu"
	aria-label="Menu"
	on:click={toggleMobileSidebar}
>
	<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
		<path
			fill-rule="evenodd"
			d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
			clip-rule="evenodd"
		/>
	</svg>
</button>
