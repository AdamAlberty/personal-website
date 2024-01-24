<script lang="ts">
	import { page } from '$app/stores';
</script>

<header
	class="sticky top-0 bg-background/80 backdrop-blur flex items-center p-5 justify-between mx-auto max-w-screen-md border-b"
>
	<a href="/">
		<img class="w-10 h-10" alt="The project logo" src="/logo.svg" />
	</a>
	<nav class="flex gap-2">
		<a href="/" class:bg-muted={$page.url.pathname === '/'} class="rounded-lg border p-1 px-3"
			>Home</a
		>
		<a
			href="/resume"
			class:bg-muted={$page.url.pathname === '/resume'}
			class="rounded-lg border p-1 px-3">Resumé</a
		>
		<a
			href="/posts"
			class:bg-muted={$page.url.pathname === '/posts'}
			class="rounded-lg border p-1 px-3">Posts</a
		>
	</nav>
</header>
