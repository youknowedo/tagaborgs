<script>
	import BnJ from '$lib/assets/bnj.webp';
	import Foodora from '$lib/assets/foodora.webp';
	import Pizza from '$lib/assets/pizza.webp';

	import { goto } from '$app/navigation';
	import { foodora } from '$lib/data/links';

	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<div class="relative bg-red-50">
	<div
		class="z-50 container h-[80vh] flex flex-col justify-center items-center text-center xl:px-24 relative"
		id="about"
	>
		<h2 class="mb-10 text-3xl font-bold text-red-900 uppercase font-paytone xl:text-5xl">
			Populäraste pizzerian<br />i Helsingborg 2020 & 2021*
		</h2>
		<a
			href={foodora}
			class="relative z-40 px-8 py-4 font-bold text-center text-white uppercase duration-200 bg-red-900 border border-red-900 rounded-full xl:text-md hover:bg-transparent hover:text-red-900"
		>
			Beställ Hem!
		</a>
	</div>

	<img
		class="hidden xl:block z-10 absolute h-[40vh] 2xl:h-[60vh] -left-[25vh]"
		style="top: calc(-20vh - {0.5 * y}px);"
		src={Pizza}
		alt="Pizza"
	/>
	<img
		class="hidden xl:block z-10 absolute h-[40vh] 2xl:h-[55vh]"
		style="bottom: {-128}px; right: calc(-10vh - {0.05 * y}px); transform: rotate({12 -
			y * -0.01}deg)"
		src={BnJ}
		alt="Ben & Jerry's"
	/>

	<img
		class="hidden lg:block z-10 absolute h-[40vh] 2xl:h-[60vh] -right-[25vh]"
		style="bottom: calc(-10vh + {0.1 * y}px); transform: rotate({12 - y * -0.01}deg)"
		src={Pizza}
		alt="Pizza"
	/>

	<div class="absolute bottom-0 left-0 z-0 overflow-hidden">
		<img
			class="h-[75vh] -ml-[15vh] xl:-ml-[8vh] -mb-[4vh] -rotate-12 opacity-50"
			src={Foodora}
			alt="Foodora Logo"
		/>
	</div>
	<p class="absolute text-red-400 bottom-8 font-paytone" style="left: {32 - y * 0.5}px">
		* Enligt Foodoras kunder
	</p>
</div>
