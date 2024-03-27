<script lang="ts">
	import IconSun from '~icons/lucide/sun';
	import IconMoon from '~icons/lucide/moon';
	import IconSystem from '~icons/lucide/laptop';
	import { fade } from 'svelte/transition';
	import { clickOutside } from '$lib/onClickOutside';

	let themeSelectorOpen = false;

	const changeTheme = (theme: 'dark' | 'light' | 'system') => {
		switch (theme) {
			case 'dark':
				localStorage.theme = 'dark';
				document.documentElement.classList.add('dark');
				break;
			case 'light':
				localStorage.theme = 'light';
				document.documentElement.classList.remove('dark');
				break;
			case 'system':
				localStorage.removeItem('theme');
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					document.documentElement.classList.add('dark');
				} else {
					document.documentElement.classList.remove('dark');
				}
				break;
		}
	};

	const handleClose = () => {
		themeSelectorOpen = false;
	};
</script>

<div class="flex items-center relative">
	<button
		on:click={() => (themeSelectorOpen = true)}
		class="rounded-lg p-1 px-3 outline-none focus:bg-muted hover:bg-muted flex items-center gap-2"
	>
		<IconSun />
		<span>Change theme</span>
	</button>

	{#if themeSelectorOpen}
		<div
			transition:fade={{ duration: 200 }}
			use:clickOutside
			on:click_outside={handleClose}
			class="absolute top-full mt-2 left-0 bg-background border w-full min-w-[200px] p-1 rounded-lg"
		>
			<button
				on:click={() => changeTheme('light')}
				class="rounded-lg p-1 px-3 outline-none focus:bg-muted hover:bg-muted flex items-center gap-2 w-full"
			>
				<IconSun />
				<span>Light</span>
			</button>
			<button
				on:click={() => changeTheme('dark')}
				class="rounded-lg p-1 px-3 outline-none focus:bg-muted hover:bg-muted flex items-center gap-2 w-full"
			>
				<IconMoon />
				<span>Dark</span>
			</button>
			<button
				on:click={() => changeTheme('system')}
				class="rounded-lg p-1 px-3 outline-none focus:bg-muted hover:bg-muted flex items-center gap-2 w-full"
			>
				<IconSystem />
				<span>System</span>
			</button>
		</div>
	{/if}
</div>
