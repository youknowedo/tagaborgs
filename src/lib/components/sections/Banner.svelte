<script>
	import { goto } from '$app/navigation';
	import { foodora } from '$lib/data/links';
</script>

<div class="bg-red-50">
	<div class="container items-center justify-between py-12 lg:flex">
		<div>
			<h3 class="text-red-500/75">Hungrig?</h3>
			<h2 class="mb-4 text-red-900">Beställ hem eller take-away!</h2>
		</div>

		<a
			href={foodora}
			class="px-8 py-4 text-lg font-bold text-white uppercase duration-200 bg-red-500 border border-red-500 rounded-full hover:bg-transparent hover:text-red-500"
		>
			Beställ!
		</a>
	</div>
</div>
