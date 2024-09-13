<script lang="ts">
	import Icons from '../Icons.svelte';

	export let el: HTMLElement | undefined;
</script>

<div class="px-4">
	<div class="container flex flex-col gap-4 px-0 py-8 xl:flex-row" bind:this={el} id="contact">
		<div class="xl:w-1/2 h-96 xl:h-auto">
			<iframe
				title="Google Maps"
				class="w-full h-full rounded-3xl"
				style="border:0;"
				loading="lazy"
				allowFullScreen
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2227.8969917340573!2d12.693349800000002!3d56.055084799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46523239f383efa3%3A0x35ada4a42fbb3ac8!2sT%C3%A5gaborgs%20pizzeria!5e0!3m2!1ssv!2sse!4v1726160838284!5m2!1ssv!2sse&center=56.055248,12.698776"
			/>
		</div>

		<div class="xl:w-1/2">
			<div class="container py-20 xl:py-28">
				<h3 class="text-taga-orange-500/75">Kontakt</h3>
				<h2 class="mb-4">Hitta Hit</h2>

				<ul>
					<li class="mb-2">
						<h4 class="-mb-1 text-lg font-paytone">Adress</h4>
						<h5
							class="inline text-xl font-montserrat cursor-pointer border-b-[1px] border-transparent hover:border-taga-orange-50 hover:text-taga-orange-50 duration-150"
						>
							<a href="https://maps.app.goo.gl/goz2mkTRMHnBJ2Ze7">
								Föreningsgatan, 254 38 Helsingborg
							</a>
						</h5>
					</li>
					<li class="mb-2">
						<h4 class="-mb-1 text-lg font-paytone">Telefon</h4>
						<h5
							class="inline text-xl font-montserrat cursor-pointer border-b-[1px] border-transparent hover:border-taga-orange-50 hover:text-taga-orange-50 duration-150"
						>
							<a href="tel:042140900">042-14 09 00</a>
						</h5>
					</li>
					<li class="mb-4">
						<h4 class="-mb-1 text-lg font-paytone">Email</h4>
						<h5
							class="inline text-xl font-montserrat cursor-pointer border-b-[1px] border-transparent hover:border-taga-orange-50 hover:text-taga-orange-50 duration-150"
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
