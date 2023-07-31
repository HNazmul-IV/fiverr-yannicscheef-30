<script lang="ts">
	import CalculationStatus from '../Components/CalculationStatus.svelte';
	import Statistcis from '../Components/Statistcis.svelte';
	import Vehicles from '../Components/Vehicles.svelte';
	import Transactions from '../Components/Transactions.svelte';
	import Chart from '../Components/Chart.svelte';
	import Table from '../Components/Table.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
</script>

<div class="main ml-28 max-sm:ml-0 p-4 h-screen overflow-y-auto">
	<div class="title">
		<div class="flex justify-between p-4">
			<h1 class="text-5xl font-bold">Finances</h1>
			<h1 class="text-4xl !font-light">August</h1>
		</div>
	</div>
	<div class="flex flex-wrap">
		<div class="w-1/4 max-xl:w-2/4 max-md:w-full max-xl:order-1">
			<Statistcis />
			<Vehicles />
			<Transactions />
		</div>
		<div class="w-2/4 max-xl:w-full max-md:w-full max-xl:order-3">
			<Table />
		</div>
		<div class="w-1/4 max-xl:w-2/4 max-md:w-full max-xl:order-2">
			<CalculationStatus />
			<CalculationStatus />
			<CalculationStatus>
				<div slot="icon" class="">
					<ProgressRadial
						width={'w-20'}
						font={100}
						stroke={100}
						value={20}
						meter="stroke-primary-400"
					>
						{20}%
					</ProgressRadial>
				</div>
			</CalculationStatus>
			<Chart />
		</div>
	</div>
</div>

<style lang="postcss"></style>
