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
	<div class="container p-8 mx-auto bg-taga-orange-500 rounded-3xl">
		<h3 class="text-white/75">Meny</h3>
		<h2 class="text-white">Våra rätter</h2>

		<div class="grid grid-cols-1 gap-4 mt-8 -m-4 xl:grid-cols-2">
			{#each expanded ? menu : menu.slice(0, 4) as item}
				<div
					class="flex flex-col justify-between p-4 text-white shadow-md xl:items-center xl:flex-row bg-white/10 rounded-xl"
				>
					<div class="flex-1 h-full">
						<div class="flex justify-between gap-4 mb-2 xl:hidden">
							<h4 class="text-2xl font-paytone">{item.name}</h4>
							<p class="text-2xl font-paytone whitespace-nowrap">{item.price} kr</p>
						</div>
						<h4 class="hidden xl:block max-w-[80%] text-2xl font-paytone mb-1">
							{item.name} - {item.price} kr
						</h4>

						<p class="xl:max-w-[80%]">{item.description}</p>
					</div>
					<div>
						<img src={item.img} class="object-cover h-24 mx-auto mt-8 xl:py-4 xl:mt-0" alt="" />
					</div>
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
