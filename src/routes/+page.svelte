<script lang="ts">
	import { goto } from '$app/navigation';

	import Icons from '$lib/components/Icons.svelte';

	import About from '$lib/components/sections/About.svelte';
	import Banner from '$lib/components/sections/Banner.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Menu from '$lib/components/sections/Menu.svelte';
	import { foodora } from '$lib/data/links';

	import bnj from '$lib/assets/bnj.webp';
	import Hero from '$lib/components/sections/Hero.svelte';
	import { onMount } from 'svelte';

	let y = 0;

	let contact: HTMLElement | undefined;
	let menu: HTMLElement | undefined;
	let about: HTMLElement | undefined;

	let open = false;

	onMount(() => {
		if (open) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	});
</script>

<svelte:head>
	<title>Tågaborgs Pizzeria Helsingborg</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<div class="flex flex-col xl:flex-row">
	<div class="hidden h-screen w-72 xl:block">
		<div class="fixed flex flex-col justify-between h-full text-white w-72">
			<div class="flex flex-col items-center">
				<img src={bnj} class="object-contain w-32 h-32 my-12" alt="" />

				<div class="text-center">
					<button
						class="text-xl hover:text-white py-2 duration-200 cursor-pointer container {y >
							(contact?.offsetTop || 0) && y < (about?.offsetTop || 0)
							? 'text-white'
							: 'text-white/70'}"
						on:click={() =>
							contact?.scrollIntoView({
								block: 'start',
								behavior: 'smooth'
							})}
					>
						Kontakt
					</button>
					<button
						class="container py-2 text-xl duration-200 cursor-pointer hover:text-white text-white/70"
						on:click={() =>
							menu?.scrollIntoView({
								block: 'start',
								behavior: 'smooth'
							})}
					>
						Meny
					</button>
					<button
						class="text-xl hover:text-white py-2 duration-200 cursor-pointer container {y >
						(about?.offsetTop || 0)
							? 'text-white'
							: 'text-white/70'}"
						on:click={() =>
							about?.scrollIntoView({
								block: 'start',
								behavior: 'smooth'
							})}
					>
						Vilka vi är
					</button>
				</div>
			</div>

			<div class="flex flex-col items-center my-12">
				<div class="flex mb-6">
					<Icons class="w-5 h-5 m-2 duration-200 cursor-pointer fill-white hover:scale-125" />
				</div>

				<a
					href={foodora}
					class="py-2 w-3/4 border-[1px] rounded-full text-center border-yellow-400 bg-yellow-400 hover:bg-transparent text-red-500 hover:text-yellow-400 font-bold duration-200"
				>
					BESTÄLL!
				</a>
			</div>
		</div>
	</div>

	<div class="absolute z-50 flex w-full xl:hidden">
		<div class="container my-8">
			<img src={bnj} class="h-20" alt="" />
		</div>
	</div>

	<div class=" relative drop-shadow-lg xl:w-[calc(100%-20rem)] xl:m-4">
		<div class="overflow-scroll xl:h-[calc(100vh-2rem)] overflow-x-hidden content xl:rounded-3xl">
			<div class="relative z-10 overflow-hidden bg-white rounded-b-3xl mb-72">
				<Hero />
				<Contact bind:contact />
				<Menu bind:menu />
				<About bind:about />
				<Banner />
			</div>
		</div>
		<Footer />
	</div>
</div>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.content::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.content {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
