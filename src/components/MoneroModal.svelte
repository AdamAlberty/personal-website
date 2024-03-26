<script lang="ts">
	import { monero } from '$res/contact';
	export let setMoneroModalOpen: any;
</script>

<div class="fixed overflow-y-auto z-20 inset-0 flex items-start py-[10vh] justify-center">
	<button
		on:click={() => setMoneroModalOpen(false)}
		class="fixed -z-10 inset-0 bg-background/70 backdrop-blur-sm flex items-start justify-center"
	></button>
	<section class="grid gap-10 max-w-md bg-muted p-8 mx-5 rounded-xl">
		<div class="flex flex-col items-start">
			<h2 class="text-2xl mb-5">My Monero Wallet address</h2>
			<div class="break-all font-medium font-mono text-lg">{monero.walletAddress}</div>
		</div>

		<div class="flex flex-col items-start">
			<h2 class="text-2xl mb-5">Wallet Address QR Code</h2>
			<img class="rounded-lg w-full" src={monero.qrCodeImage} alt="Monero wallet address QR code" />
		</div>
	</section>
</div>
