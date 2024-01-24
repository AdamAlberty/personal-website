<script>
	import '../app.css';
	import Header from '$components/Header.svelte';
</script>

<Header />

<slot />

<footer class="py-20">
	<p class="text-center text-sm text-muted-foreground">
		Adam Alberty &copy; {new Date().getFullYear()}
	</p>
</footer>
