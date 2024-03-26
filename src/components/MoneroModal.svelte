<script lang="ts">
	import { monero } from '$res/contact';
	export let setMoneroModalOpen: any;
</script>

<div class="fixed z-20 inset-0 flex items-start py-[20vh] justify-center">
	<button
		on:click={() => setMoneroModalOpen(false)}
		class="fixed -z-10 inset-0 bg-background/70 backdrop-blur-sm flex items-start py-[20vh] justify-center"
	></button>
	<section class="grid gap-5 max-w-md bg-muted p-8 mx-5 rounded-xl">
		<div class="flex flex-col items-start md:items-center">
			<h2 class="text-2xl mb-3">Monero Wallet address</h2>
			<div class="break-all font-medium font-mono text-lg">{monero.walletAddress}</div>
		</div>

		<div class="flex flex-col items-start md:items-center mt-10">
			<h2 class="text-2xl mb-3">Wallet Address QR Code</h2>
			<img class="rounded-lg" src={monero.qrCodeImage} alt="Monero wallet address QR code" />
		</div>
	</section>
</div>
