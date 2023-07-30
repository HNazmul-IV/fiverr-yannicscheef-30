<script>
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	let value = 89.3;
</script>

<div class="flex justify-between box px-4 py-2">
	<div>
		<p class="text">Collected</p>
		<p class="text-currency">23.456,78 €</p>
	</div>
	<div>
		<ProgressRadial
			...
			stroke={100}
			meter="stroke-blue-700"
			track="stroke-sky-300"
			class="w-[77px] h-[77px]"
			{value}
		/>
		<p class="text-percentage text-end">89.3%</p>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
	.box {
		max-width: 424px;
		max-height: 140px;
		border-radius: 20px;
		background: var(--test-bg, #242940);
	}

	.text {
		color: #fff;
		font-family: Nunito;
		font-size: 28px;
		font-style: normal;
		font-weight: 200;
		line-height: normal;
		letter-spacing: 2.24px;
	}
	.text-percentage {
		color: #ffffff;
		font-size: 18px;
		font-family: 'Nunito', sans-serif;
		font-weight: 200;
		letter-spacing: 1.44px;
	}
	.text-currency {
		color: #fff;
		font-family: Nunito;
		font-size: 40px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 3.2px;
	}
</style>
