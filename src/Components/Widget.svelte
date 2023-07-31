<script>
	export let className = '';
	export let centeredTitle = false;
	export let title = 'Widget';
	export let defaultPadding = true;
	export let margin = 'p-3';
</script>

<div class="widget {margin} max-sm:p-1">
	<div class="bg-[#242940] {className} {defaultPadding ? 'p-6' : ''}  rounded-2xl widget-inner">
		<div class="mb-2">
			<slot name="title">
				<h3 class:text-center={centeredTitle} class="text-3xl max-sm:text-xl !font-light text mb-3">
					{title}
				</h3>
			</slot>
		</div>
		<slot />
	</div>
</div>

<style>
	.widget-inner {
		box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.25);
	}
</style>
