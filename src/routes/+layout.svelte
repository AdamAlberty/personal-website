<script>
	import '../app.scss';
	import '@fontsource-variable/inter';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import { meta } from '$res/meta';
</script>

<!-- SEO -->
<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta name="keywords" content={meta.keywords} />
	<meta name="author" content={meta.author} />
	<meta
		name="robots"
		content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
	/>
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={`${meta.site}/open-graph.png`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={meta.site} />
	<meta property="og:site_name" content={meta.name} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={`${meta.site}/open-graph.png`} />
</svelte:head>

<Header />
<slot />
<Footer />
