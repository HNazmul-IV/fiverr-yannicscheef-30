<script>
	import { ProgressBar } from '@skeletonlabs/skeleton';

	const data = [
		{ progress: 22, month: 'Jan' },
		{ progress: 35, month: 'Feb' },
		{ progress: 50, month: 'Mar' },
		{ progress: 65, month: 'Apr' },
		{ progress: 80, month: 'May' },
		{ progress: 40, month: 'Jun' },
		{ progress: 60, month: 'Jul' },
		{ progress: 75, month: 'Aug' },
		{ progress: 90, month: 'Sep' },
		{ progress: 15, month: 'Oct' },
		{ progress: 30, month: 'Nov' },
		{ progress: 55, month: 'Dec' }
	];
</script>

<div>
	<main>
		<div>
			<p class="text-4xl text">Analytics</p>
		</div>
		<div class="">
			{#each data as item}
				<div class="flex-grow bg-white mx-1 relative h-full rounded-2xl">
					<div
						class="bg-blue-500 absolute top-0 left-0 h-full rounded-2xl"
						style="width: {item.progress}%"
					/>
				</div>
			{/each}
		</div>

		<div />
		<div />
	</main>
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
		color: #19dc2c;
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
