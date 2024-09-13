<script lang="ts">
	import pizza from '$lib/assets/pizza.webp';

	let expanded = false;

	export let el: HTMLElement | undefined;
	export let menu: {
		name: string;
		price: number;
		description: string;
		img: string;
	}[];
</script>

<div class="px-4" bind:this={el}>
	<div class="container p-12 mx-auto bg-taga-orange-500 rounded-3xl">
		<h3 class="text-white/75">Meny</h3>
		<h2 class="mb-4 text-white">Våra rätter</h2>

		<div class="grid grid-cols-1 gap-4 mt-10 xl:grid-cols-2">
			{#each expanded ? menu : menu.slice(0, 4) as item}
				<div
					class="flex items-center justify-between p-4 text-white shadow-md bg-white/10 rounded-xl"
				>
					<div class="flex-1 h-full">
						<h4 class="text-lg font-paytone">{item.name}</h4>
						<p>{item.price} kr</p>
						<p class="max-w-[80%]">{item.description}</p>
					</div>
					<img src={item.img} class="h-20" alt="" />
				</div>
			{/each}
		</div>

		{#if !expanded}
			<div class="flex justify-center mt-12">
				<button
					class="px-8 py-4 font-bold text-white duration-200 border rounded-full shadow-md border-white/10 hover:bg-white/0 bg-white/10 hover:border-white"
					on:click={() => (expanded = true)}
				>
					VISA MER
				</button>
			</div>
		{/if}
	</div>
</div>
