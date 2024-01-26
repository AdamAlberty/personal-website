<script>
	import '../app.scss';
	import '@fontsource-variable/inter';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import { meta } from '$res/meta';
</script>

<svelte:head>
	<meta name="description" content={meta.description} />
	<meta name="keywords" content={meta.keywords} />
</svelte:head>

<Header />
<slot />
<Footer />
