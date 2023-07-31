<script>
	import Widget from './Widget.svelte';
</script>

<Widget defaultPadding={false} margin="p-2 ">
	<div class="flex p-4 items-start justify-between" slot="title">
		<div>
			<h3 class="text-2xl mb-1 !font-light">Profit</h3>
			<p class="amount text-4xl">123.456,78 €</p>
		</div>
		<div class="">
			<slot name="icon">
				<p class="text-green-500">0.2%</p>
			</slot>
		</div>
	</div>
</Widget>

<style></style>
