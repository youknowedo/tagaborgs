<script lang="ts">
	import BnJ from '$lib/assets/bnj.webp';
	import Burger from '$lib/assets/burger.png';
	import logo from '$lib/assets/logo-burger-co.svg';
	import Icons from '$lib/components/Icons.svelte';

	import About from '$lib/components/sections/About.svelte';
	import Banner from '$lib/components/sections/Banner.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Footer from '$lib/components/sections/Footer.svelte';
	import Menu from '$lib/components/sections/Menu.svelte';
	import { foodora } from '$lib/links';

	import Hero from '$lib/components/sections/Hero.svelte';
	import { onMount } from 'svelte';

	let y = 0;
	let innerY: number | undefined = undefined;

	let contact: HTMLElement | undefined;
	let menu: HTMLElement | undefined;
	let about: HTMLElement | undefined;

	let forceHeader = false;

	foodora.set('https://www.foodora.se/restaurant/ggyd/tagaborg-burger-co');
</script>

<svelte:head>
	<title>Tågaborgs Burger Co</title>
</svelte:head>

<svelte:window bind:scrollY={y} />

<div
	class="fixed inset-0 bottom-auto z-50 {forceHeader ? 'h-32' : 'h-4'}"
	role="navigation"
	on:mouseenter={() => (innerY ?? y) > 160 && (forceHeader = true)}
	on:mouseleave={() => (innerY ?? y) > 160 && (forceHeader = false)}
/>

<div class="flex flex-col">
	<div
		class="container relative justify-between hidden h-32 text-white xl:flex {(innerY ?? y > 160)
			? 'duration-200'
			: ''}"
		style="margin-top: -{Math.min(forceHeader ? 0 : (innerY ?? y), 160)}px;"
	>
		<div class="flex items-center gap-16">
			<img src={logo} class="object-contain w-24 h-24 my-12" alt="" />

			<div class="flex gap-12 text-center">
				<button
					class="text-xl whitespace-nowrap hover:text-white p-0 duration-200 cursor-pointer container {(innerY ??
						y) > (contact?.offsetTop || 0) && (innerY ?? y) < (menu?.offsetTop || 0)
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
					class=" text-xl whitespace-nowrap p-0 duration-200 cursor-pointer hover:text-white {(innerY ??
						y) > (menu?.offsetTop || 0) && (innerY ?? y) < (about?.offsetTop || 0)
						? 'text-white'
						: 'text-white/70'}"
					on:click={() =>
						menu?.scrollIntoView({
							block: 'start',
							behavior: 'smooth'
						})}
				>
					Meny
				</button>
				<button
					class="text-xl whitespace-nowrap hover:text-white p-0 duration-200 cursor-pointer container {(innerY ??
						y) > (about?.offsetTop || 0)
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

		<div class="flex items-center my-12">
			<div class="flex mr-6">
				<Icons class="w-5 h-5 m-2 duration-200 cursor-pointer fill-white hover:scale-125" />
			</div>

			<a
				href={$foodora}
				class="py-4 px-8 border-[1px] rounded-full text-center border-taga-orange-500 bg-taga-orange-500 hover:bg-transparent text-white hover:text-taga-orange-500 font-bold duration-200"
			>
				BESTÄLL!
			</a>
		</div>
	</div>
</div>

<div class="absolute z-50 flex w-full xl:hidden">
	<div class="container my-8">
		<img src={logo} class="h-20" alt="" />
	</div>
</div>

<div class="flex-1 drop-shadow-lg xl:m-4">
	<div
		class="overflow-scroll xl:fixed bottom-0 xl:h-[calc(100vh-var(--y))] inset-x-0 overflow-x-hidden content xl:rounded-3xl {(innerY ??
		y > 160)
			? 'duration-200'
			: ''}"
		style="--y: {152 - Math.min(forceHeader ? 0 : (innerY ?? y), 120)}px;"
		on:scroll={(e) =>
			(innerY = e.currentTarget.scrollTop === 0 ? undefined : e.currentTarget.scrollTop)}
	>
		<div class="relative z-40 overflow-hidden bg-white rounded-b-3xl mb-72">
			<Hero y={innerY}>
				<img
					class="hidden xl:block z-10 absolute h-[40vh] 2xl:h-[60vh] -left-[25vh] rotate-[140deg]"
					style="top: calc(-20vh - {0.5 * (innerY ?? y)}px);"
					src={Burger}
					alt="Burger"
				/>
				<img
					class="hidden xl:block z-10 absolute h-[40vh] 2xl:h-[55vh]"
					style="bottom: {-128}px; right: calc(-10vh - {0.05 *
						(innerY ?? y)}px); transform: rotate({12 - (innerY ?? y) * -0.01}deg)"
					src={BnJ}
					alt="Ben & Jerry's"
				/>

				<img
					class="hidden lg:block xl:hidden z-10 absolute h-[40vh] 2xl:h-[60vh] -right-[25vh]"
					style="bottom: calc(-10vh + {0.1 * (innerY ?? y)}px); transform: rotate({12 -
						(innerY ?? y) * -0.01}deg)"
					src={Burger}
					alt="Burger"
				/>
			</Hero>
			<Contact bind:el={contact} />
			<Menu
				bind:el={menu}
				menu={[
					{
						name: 'Royal Burger',
						price: 119,
						description:
							'Royal burger är den klassiska hamburgaren men med vår egna touch! Den innehåller vårt kryddiga 100g kött, krispsallad, tomat, ost, salt gurka och hamburgaredressing!',
						img: Burger
					},
					{
						name: 'Crazy Cheese',
						price: 119,
						description:
							'Ostens hamburgare, tillsammans med vårt kryddiga 100g kött, cheddar ost, chilicheese, cheddar doritos chip, majodressing och krispsallad!',
						img: Burger
					},
					{
						name: 'Grand Tryffelburger',
						price: 119,
						description:
							'Tryfflets hamburgare! Blandningen med tryffeldressing och teriyakisås tillsammans med vårt kryddiga 100gkött, krispsallad, ost, lök - har du en nyfunnen hamburgarkärlek!',
						img: Burger
					},
					{
						name: 'Volcano burgare 🌶',
						price: 119,
						description:
							'Med hettan av pressade jalapeños i köttet och sirrachomajo görs denna volcvano burger tillsammans med vårt kryddiga 100g kött, ost, färsk jalapeños, rostad lök och toppad med chilli cheese, en riktigt smakvulkan i din mun!',
						img: Burger
					},
					{
						name: 'Smoked BBQ Burger',
						price: 119,
						description:
							'Med smoked majo dressing, krispsallad, ost, rostad lök och vårt kryddiga 100g kött - toppar vi denna hamburgaren med 3 stycken lökringar och droppar av chopotle bbq sås! Smoooooked!',
						img: Burger
					},
					{
						name: 'Hot Crispy Chicken',
						price: 119,
						description:
							'Vår speciella crispy chicken burgare innehåller Coleslaw sallad, cheddar ost, tomat och srirachamajo, mums!',
						img: Burger
					},
					{
						name: 'Halloumi Burger',
						price: 119,
						description:
							'Vår vegetariska burgare med två skivor halloumi som är stekta och tillsammans med ruccolasallad, avokado, honung utgör vår smakrika halloumi burger!',
						img: Burger
					}
				]}
			/>
			<About bind:el={about} />
			<Banner />
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
