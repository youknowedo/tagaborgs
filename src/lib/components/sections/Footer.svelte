<script>
	import Icons from '../Icons.svelte';

	let date = new Date();
	const year = date.getFullYear();
</script>

<footer class="fixed inset-0 top-auto z-0">
	<div class="container flex flex-col items-center py-16 text-5xl text-center text-white">
		<h3 class="mb-6 font-ultra">Tågaborgs</h3>

		<div class="flex mb-6 align-items">
			<Icons
				class="fill-white rounded-full border-[1px] border-dashed h-12 w-12 p-3 m-2 hover:bg-white hover:fill-red-500 hover:text-red-500 hover:border-solid duration-200 cursor-pointer"
			/>
		</div>

		<div class="text-sm">
			Copyright {year == 2022 ? '' : '2022-'}{year} &copy; Tågaborgs Pizzeria Handelsbolag. Sida av
			<a href="https://www.sigfredo.fun" class="font-bold hover:underline"> sigfredo </a>
		</div>
	</div>
</footer>
