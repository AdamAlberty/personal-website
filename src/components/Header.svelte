<script lang="ts">
	import { page } from '$app/stores';
	import IconMenu from '~icons/lucide/Menu';

	let menuOpen = false;
</script>

<header class="sticky top-0 bg-background/80 backdrop-blur border-b">
	<div class="flex items-center p-5 justify-between mx-auto max-w-screen-2xl relative">
		<a
			href="/"
			aria-label="Go to homepage"
			class="flex items-center gap-5 shrink-0 outline-none relative group"
		>
			<img class="w-10 h-10" alt="site logo - 3 ellipses forming a letter A" src="/logo.svg" />
			<div class="text-xl font-mono font-bold">Adam Alberty</div>
		</a>

		<button
			class={`text-2xl transition md:hidden ${menuOpen ? 'rotate-90' : ''}`}
			on:click={() => (menuOpen = !menuOpen)}><IconMenu /></button
		>

		<nav
			class={`${menuOpen ? 'flex flex-col w-full absolute top-full left-0 bg-background px-8 py-10 border-b' : 'hidden'} md:flex md:flex-row md:w-auto md:static md:px-0 md:py-0 md:border-b-0 gap-2 md:gap-4`}
		>
			<a
				href="/"
				class:bg-muted={$page.url.pathname === '/'}
				class="rounded-lg p-1 px-3 outline-none focus:bg-muted hover:bg-muted">Home</a
			>
			<a
				href="/resume"
				class:bg-muted={$page.url.pathname === '/resume'}
				class="rounded-lg p-1 px-3 outline-none focus:bg-muted hover:bg-muted">Resumé</a
			>
			<a
				href="/blog"
				class:bg-muted={$page.url.pathname === '/blog'}
				class="rounded-lg p-1 px-3 outline-none focus:bg-muted hover:bg-muted">Blog</a
			>
			<a
				href="/contact"
				class:bg-muted={$page.url.pathname === '/contact'}
				class="rounded-lg p-1 px-3 outline-none focus:bg-muted hover:bg-muted">Contact</a
			>
		</nav>
	</div>
</header>
