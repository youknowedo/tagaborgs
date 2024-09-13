<script lang="ts">
	export let el: HTMLElement | undefined;
</script>

<div>
	<article
		class="container flex flex-col items-center text-center py-28 xl:px-24"
		bind:this={el}
		id="about"
	>
		<h3 class="text-taga-orange-400/75">Vilka vi är</h3>
		<h2 class="mb-10">Historisk mat på Föreningsgatan</h2>

		<p class="xl:text-2xl font-montserrat">
			Sugen på en god pizza? Kanske är du på humör för en saftig hamburgare? Oavsett vilken typ av
			måltid du har i åtanke, är Tågaborgs redo att förbereda den åt dig. Sedan 2020 har Tågaborgs
			varit det goda matstället för Helsingborgare. Från hamburgare till pizza, mexikansk till
			sallader, du hittar alla typer av rejäla måltider tillagade på Tågaborgs. Låter gott, eller
			hur? Vi finns här för att servera dig den bästa maten som finns, när du letar efter en bra
			restaurang i Helsingborg, Skåne.
		</p>
	</article>
</div>
