<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="sticky top-0 bg-background/80 backdrop-blur border-b">
	<div class="flex items-center p-5 justify-between mx-auto max-w-screen-md">
		<a
			href="/"
			aria-label="Go to homepage"
			class="outline-none focus:rotate-12 transition-transform relative group"
		>
			<img class="w-10 h-10" alt="site logo - 3 ellipses forming a letter A" src="/logo.svg" />
			<span class="absolute left-full hidden group-focus:block text-sm">Go to homepage</span>
		</a>
		<nav class="flex gap-2">
			<a
				href="/"
				class:bg-muted={$page.url.pathname === '/'}
				class="rounded-lg border p-1 px-3 outline-none focus:bg-accent focus:text-primary">Home</a
			>
			<a
				href="/resume"
				class:bg-muted={$page.url.pathname === '/resume'}
				class="rounded-lg border p-1 px-3 outline-none focus:bg-accent focus:text-primary">Resumé</a
			>
			<a
				href="/blog"
				class:bg-muted={$page.url.pathname === '/blog'}
				class="rounded-lg border p-1 px-3 outline-none focus:bg-accent focus:text-primary">Blog</a
			>
		</nav>
	</div>
</header>
