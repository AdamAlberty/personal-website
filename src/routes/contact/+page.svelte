<script lang="ts">
	import MoneroModal from '$components/MoneroModal.svelte';
	import SectionTitle from '$components/SectionTitle.svelte';
	import { contacts } from '$res/contact';
	import IconKey from '~icons/lucide/key';

	let moneroModalOpen = false;
	const setMoneroModalOpen = (modalOpen: boolean) => {
		moneroModalOpen = modalOpen;
	};
</script>

<main class="mx-auto max-w-screen-xl p-8 py-[10vh]">
	<section>
		<div class="">
			<SectionTitle>Contact</SectionTitle>
			<p class="text-muted-foreground md:text-lg">
				Feel free to reach out through these platforms.
			</p>
		</div>

		<div class="grid gap-3 md:grid-cols-3 mt-10">
			{#each contacts as contact, idx}
				<a
					class:md:col-span-2={idx === 0}
					class="flex items-center p-5 rounded-2xl border hover:bg-muted focus:bg-muted transition-colors"
					href={contact.link}
				>
					<div class="min-w-8">
						<svelte:component this={contact.icon} />
					</div>
					<div>{contact.name}</div>
				</a>
			{/each}

			<a
				class="flex items-center p-5 rounded-2xl border hover:bg-muted focus:bg-muted transition-colors"
				href={`/pub.asc`}
			>
				<div class="min-w-8">
					<IconKey />
				</div>
				<div>Public key</div>
			</a>

			<button
				on:click={() => (moneroModalOpen = true)}
				class="flex items-center p-5 rounded-2xl border hover:bg-muted focus:bg-muted transition-colors"
			>
				<div class="min-w-8">
					<svg xmlns="http://www.w3.org/2000/svg" class="pr-3" viewBox="0 0 496 512">
						<path
							fill="currentColor"
							d="M352 384h108.4C417 455.9 338.1 504 248 504S79 455.9 35.6 384H144V256.2L248 361l104-105zM88 336V128l159.4 159.4L408 128v208h74.8c8.5-25.1 13.2-52 13.2-80C496 119 385 8 248 8S0 119 0 256c0 28 4.6 54.9 13.2 80z"
						/>
					</svg>
				</div>
				<div>Monero</div>
			</button>
		</div>
	</section>
</main>

{#if moneroModalOpen}
	<MoneroModal {setMoneroModalOpen} />
{/if}
