<script lang="ts">
	import SectionTitle from '$components/SectionTitle.svelte';
	import { contacts } from '$res/contact';
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
					class:md:col-span-3={idx === 0}
					class="flex items-center p-5 rounded-2xl border hover:bg-muted focus:bg-muted transition-colors"
					href={contact.link}
				>
					<div class="min-w-8">
						<svelte:component this={contact.icon} />
					</div>
					<div>{contact.name}</div>
				</a>
			{/each}
		</div>
	</section>
</main>
