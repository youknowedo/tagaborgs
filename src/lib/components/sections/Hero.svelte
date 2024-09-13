<script lang="ts">
	import BnJ from '$lib/assets/bnj.webp';
	import Foodora from '$lib/assets/foodora.svg';
	import Pizza from '$lib/assets/pizza.webp';
	import res1 from '$lib/assets/res1.jpg';

	import { goto } from '$app/navigation';
	import { foodora } from '$lib/links';

	export let y: number | undefined;
	let windowY = 0;
</script>

<svelte:window bind:scrollY={windowY} />

<div class="relative bg-cover" style="background-image: url({res1});">
	<div class="bg-taga-orange-950/40">
		<div
			class="z-50 container h-[75vh] flex flex-col justify-center items-center text-center xl:px-24 relative"
			id="about"
		>
			<h2 class="mb-10 text-3xl font-bold text-white uppercase font-paytone xl:text-5xl">
				Populäraste restaurangen<br />i Helsingborg 2022*
			</h2>
			<a
				href={$foodora}
				class="relative z-40 px-8 py-4 font-bold text-center text-white uppercase duration-200 border rounded-full bg-taga-orange-500 border-taga-orange-500 xl:text-md hover:bg-transparent hover:text-white hover:border-white"
			>
				Beställ Hem!
			</a>
		</div>

		<slot>
			<img
				class="hidden xl:block z-10 absolute h-[40vh] 2xl:h-[60vh] -left-[25vh]"
				style="top: calc(-20vh - {0.5 * (y ?? windowY)}px);"
				src={Pizza}
				alt="Pizza"
			/>
			<img
				class="hidden xl:block z-10 absolute h-[40vh] 2xl:h-[55vh]"
				style="bottom: {-128}px; right: calc(-10vh - {0.05 *
					(y ?? windowY)}px); transform: rotate({12 - (y ?? windowY) * -0.01}deg)"
				src={BnJ}
				alt="Ben & Jerry's"
			/>

			<img
				class="hidden lg:block xl:hidden z-10 absolute h-[40vh] 2xl:h-[60vh] -right-[25vh]"
				style="bottom: calc(-10vh + {0.1 * (y ?? windowY)}px); transform: rotate({12 -
					(y ?? windowY) * -0.01}deg)"
				src={Pizza}
				alt="Pizza"
			/>
		</slot>

		<div class="absolute bottom-0 left-0 z-0 overflow-hidden">
			<img
				class="h-[75vh] -ml-[15vh] xl:-ml-[8vh] -mb-[4vh] -rotate-12 opacity-5"
				src={$foodora}
				alt="Foodora Logo"
			/>
		</div>
		<p
			class="absolute text-taga-orange-400 bottom-8 font-paytone"
			style="left: {32 - (y ?? windowY) * 0.5}px"
		>
			* Enligt Foodoras kunder
		</p>
	</div>
</div>
