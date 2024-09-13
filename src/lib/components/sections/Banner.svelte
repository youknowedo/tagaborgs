<script>
	import { goto } from '$app/navigation';
	import { foodora } from '$lib/links';
</script>

<div class="bg-taga-orange-50">
	<div class="container items-center justify-between py-12 xl:flex">
		<div>
			<h3 class="text-taga-orange-500/75">Hungrig?</h3>
			<h2 class="mb-4 text-taga-orange-900">Beställ hem eller take-away!</h2>
		</div>

		<a
			href={$foodora}
			class="px-8 py-4 text-lg font-bold text-white uppercase duration-200 bg-taga-orange-500 border border-taga-orange-500 rounded-full hover:bg-transparent hover:text-taga-orange-500"
		>
			Beställ!
		</a>
	</div>
</div>
