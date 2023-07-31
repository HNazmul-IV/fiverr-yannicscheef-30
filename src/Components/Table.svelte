<script>
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import Widget from './Widget.svelte';

	const tableArr = [
		{ name: '', position: '', symbol: '', weight: '' },
		{ name: '', position: '', symbol: '', weight: '' },
		{ name: '', position: '', symbol: '', weight: '' },
		{ name: '', position: '', symbol: '', weight: '' }
	];
	let totalWeight = 0;
</script>

<Widget>
	<div slot="title" class="flex items-center justify-between">
		<h1 class="text-3xl max-sm:text-2xl !font-light">Invoice</h1>
		<div class="">
			<svg
				width="25"
				height="18"
				viewBox="0 0 25 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M1 4L24 4" stroke="white" stroke-width="1.5" stroke-linecap="round" />
				<circle cx="16" cy="4" r="4" fill="white" />
				<path d="M24 14L1 14" stroke="white" stroke-width="1.5" stroke-linecap="round" />
				<circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 13 10)" fill="white" />
			</svg>
		</div>
	</div>

	<div class="table-responsive-container overflow-x-auto">
		<div class="table !bg-transparent min-w-[750px] max-sm:min-w-[600px]">
			<div class="table-header p-3">
				<div class="table-grid bg-surface-800 rounded-2xl px-5 py-2">
					<h5 class=" th pl-2">Name</h5>
					<h5 class="th">Amount</h5>
					<h5 class="th">Sent</h5>
					<h5 class="th">Paid</h5>
					<h5 class="th">Payment Date</h5>
				</div>
			</div>

			<div class="table-body h-[calc(100vh_-_287px)] p-2 overflow-y-scroll">
				{#each [...new Array(20)] as item, idx}
					<div class:active={idx === 4} class=" my-3 table-tr">
						<div class="table-grid p-5 rounded-3xl bg-[#0e1637]">
							<div class="name tr">Jhon Doe</div>
							<div class="amount tr">Jhon Doe</div>
							<div class=" sent tr">
								<SlideToggle size="sm" active="bg-purple-500" name="slide" />
							</div>
							<div class="paid tr">
								<SlideToggle size="sm" active="bg-purple-500" name="slide" />
							</div>
							<div class="payment-date tr">Jhon Doe</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Widget>

<style lang="postcss">
	.table-grid {
		width: 100%;
		display: grid;
		grid-template-columns: 30% 17% 16% 17% 20%;
	}
	.table-header * {
		font-weight: 400;
	}
	tr {
		@apply max-sm:text-sm;
	}
	th {
		@apply max-sm:text-sm;
	}
	.table-tr {
		/* background-color: ; */
		position: relative;
		z-index: 1;
	}
	.table-tr.active::before {
		content: '';
		position: absolute;
		width: 100%;
		height: calc(100% - 2px);
		z-index: -100;
		background: transparent;
		border: 2px solid white;
		top: 1px;
		left: 0px;
	}
</style>
