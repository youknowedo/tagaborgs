<script lang="ts">
	export let about: HTMLElement | undefined;
</script>

<div class="bg-white">
	<article
		class="container flex flex-col items-center text-center py-28 md:px-24"
		bind:this={about}
		id="about"
	>
		<h3 class="text-red-400/75">Vilka vi är</h3>
		<h2 class="mb-10">Historisk pizza på Föreningsgatan</h2>

		<p class="md:text-2xl font-montserrat">
			Sugen på en god pizza? Kanske är du på humör för en saftig hamburgare? Oavsett vilken typ av
			måltid du har i åtanke, är Tågaborgs Pizzeria redo att förbereda den åt dig. Sedan 2020 har
			Tågaborgs Pizzeria varit det goda matstället för Helsingborgare. Från hamburgare till pizza,
			mexikansk till sallader, du hittar alla typer av rejäla måltider tillagade på Tågaborgs. Låter
			gott, eller hur? Vi finns här för att servera dig den bästa maten som finns, när du letar
			efter en bra pizzeria i Helsingborg, Skåne.
		</p>
	</article>
</div>
