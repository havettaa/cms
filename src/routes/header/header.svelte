<script>
	import Hamburger from './hamburger.svelte';
	import Sidebar from './sidebar.svelte';
	import Topbar from './topbar.svelte';
</script>

<header class="z-10 py-2 bg-white shadow-md dark:bg-gray-800">
	<Topbar />
</header>

<!-- Position absolute -->
<Hamburger />
<Sidebar />
