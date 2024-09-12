<script lang="ts">
	import pizza from '$lib/assets/pizza.webp';

	let expanded = false;

	export let menu: HTMLElement | undefined;

	const MENU: { name: string; price: number; description: string }[] = [
		{
			name: 'Vesuvio',
			price: 127,
			description: 'Tomatsås, ost och skinka.'
		},
		{
			name: 'Capricciosa',
			price: 127,
			description: 'Tomatsås, ost, skinka och champinjoner.'
		},
		{
			name: 'Gondola',
			price: 127,
			description: 'Tomatsås, ost, skicka och räkor.'
		},
		{
			name: 'Hawaii',
			price: 127,
			description: 'Tomatsås, ost, skinka och ananas.'
		},
		{
			name: 'Calzone',
			price: 127,
			description: 'Inbakad pizza med tomatsås, ost och skinka.'
		},
		{
			name: 'Calzone Special',
			price: 131,
			description: 'Inbakad pizza med tomatsås, ost, skinka, räkor och champinjoner.'
		},
		{
			name: 'Romana',
			price: 131,
			description: 'Tomatsås, ost, skinka, champinjoner och räkor.'
		},
		{
			name: 'Quattro Stagione',
			price: 138,
			description: 'Tomatsås, ost, skinka, räkor, champinjoner och musslor.'
		},
		{
			name: 'Italia',
			price: 138,
			description: 'Tomatsås, ost, skinka, köttfärs, salami och lök.'
		},
		{
			name: 'Italia Special',
			price: 138,
			description: 'Tomatsås, ost, skinka, köttfärs, salami, lök och bearnaisesås.'
		},
		{
			name: 'Tefat',
			price: 138,
			description: 'Dubbelinbakad pizza med tomatsås, ost och skinka.'
		},
		{
			name: 'Bambino',
			price: 114,
			description: 'Tomatsås, ost, skinka och tonfisk.'
		},
		{
			name: 'Tågaborg',
			price: 138,
			description: 'Tomatsås, ost, skinka, oliver, räkor, paprika och kronärtskocka.'
		},
		{
			name: 'Split',
			price: 131,
			description: 'Tomatsås, ost, skinka, ananas, banan och curry.'
		}
	];
</script>

<div class="px-4" bind:this={menu}>
	<div class="container p-12 mx-auto bg-red-500 rounded-3xl">
		<h3 class="text-white/75">Meny</h3>
		<h2 class="mb-4 text-white">Våra pizzor</h2>

		<div class="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2">
			{#each expanded ? MENU : MENU.slice(0, 6) as item}
				<div
					class="flex items-center justify-between p-4 text-white shadow-md bg-white/10 rounded-xl"
				>
					<div class="flex-1 h-full">
						<h4 class="text-lg font-paytone">{item.name}</h4>
						<p>{item.price} kr</p>
						<p class="max-w-[80%]">{item.description}</p>
					</div>
					<img src={pizza} class="h-20" alt="" />
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
