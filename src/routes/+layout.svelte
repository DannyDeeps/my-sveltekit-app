<script>
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/site/Navbar.svelte';

	import 'bootstrap/dist/css/bootstrap.min.css';
	import 'bootstrap-icons/font/bootstrap-icons.min.css';
	import '$lib/css/global.css';

	onMount(async () => {
		window.bootstrap = await import('bootstrap/dist/js/bootstrap.bundle');
	});
</script>

<Navbar />

<slot />
