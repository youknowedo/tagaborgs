<script lang="ts">
	import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
	import { onMount } from 'svelte';
	import Icons from '../Icons.svelte';

	export let el: HTMLElement | undefined;

	onMount(() => {
		mapboxgl.accessToken =
			'pk.eyJ1IjoieW91a25vd2VkbyIsImEiOiJjbTE1ZjYxcGkwN250MnJxdjdzc2p0cG52In0.z8e6uFhdL4Mj4FpoZoEDGg';
		const map = new mapboxgl.Map({
			container: 'map', // container ID
			style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
			center: [12.6933333, 56.055], // starting position [lng, lat]
			zoom: 15 // starting zoom
		});
		// Create a default Marker and add it to the map.
		const marker = new mapboxgl.Marker({
			color: '#d4722a'
		})
			.setLngLat([12.6933333, 56.055])
			.addTo(map);
	});
</script>

<head>
	<link href="https://api.mapbox.com/mapbox-gl-js/v3.6.0/mapbox-gl.css" rel="stylesheet" />
</head>

<div class="px-4">
	<div class="container flex flex-col gap-4 px-0 py-8 xl:flex-row" bind:this={el} id="contact">
		<div class="xl:w-1/2 h-96 xl:h-auto">
			<div id="map" class="h-full overflow-hidden rounded-3xl"></div>
		</div>

		<div class="xl:w-1/2">
			<div class="container py-20 xl:py-28">
				<h3 class="text-taga-orange-500/75">Kontakt</h3>
				<h2 class="mb-4">Hitta Hit</h2>

				<ul>
					<li class="mb-2">
						<h4 class="-mb-1 text-lg font-paytone">Adress</h4>
						<h5
							class="inline text-xl font-montserrat cursor-pointer border-b-[1px] border-transparent hover:border-taga-orange-500 hover:text-taga-orange-500 duration-150"
						>
							<a href="https://maps.app.goo.gl/goz2mkTRMHnBJ2Ze7">
								Föreningsgatan, 254 38 Helsingborg
							</a>
						</h5>
					</li>
					<li class="mb-2">
						<h4 class="-mb-1 text-lg font-paytone">Telefon</h4>
						<h5
							class="inline text-xl font-montserrat cursor-pointer border-b-[1px] border-transparent hover:border-taga-orange-500 hover:text-taga-orange-500 duration-150"
						>
							<a href="tel:042140900">042-14 09 00</a>
						</h5>
					</li>
					<li class="mb-4">
						<h4 class="-mb-1 text-lg font-paytone">Email</h4>
						<h5
							class="inline text-xl font-montserrat cursor-pointer border-b-[1px] border-transparent hover:border-taga-orange-500 hover:text-taga-orange-500 duration-150"
						>
							<a href="mailto:kontakt@tagaborgs.se">kontakt@tagaborgs.se</a>
						</h5>
					</li>
					<li>
						<h4 class="text-lg font-paytone">Andra länkar</h4>
						<div class="flex -ml-2 align-items">
							<Icons class="w-5 h-5 m-2 duration-200 cursor-pointer fill-white hover:scale-125" />
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
