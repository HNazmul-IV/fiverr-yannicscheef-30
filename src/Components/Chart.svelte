<script lang="ts">
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import Widget from './Widget.svelte';
	import {
		BarController,
		Chart,
		Colors,
		CategoryScale,
		LinearScale,
		BarElement,
		Tooltip,
		Legend
	} from 'chart.js';
	import { browser } from '$app/environment';
	import { onMount, tick } from 'svelte';

	let chart_element: HTMLCanvasElement;
	const data = [
		{ month: 'Jan', expense: 30, profit: 10 },
		{ month: 'Feb', expense: 40, profit: 10 },
		{ month: 'Mar', expense: 50, profit: 10 },
		{ month: 'Apr', expense: 30, profit: 10 },
		{ month: 'May', expense: 35, profit: 10 },
		{ month: 'Jun', expense: 55, profit: 10 },
		{ month: 'July', expense: 70, profit: 10 },
		{ month: 'Aug', expense: 72, profit: 10 },
		{ month: 'Sep', expense: 68, profit: 10 },
		{ month: 'Oct', expense: 58, profit: 10 },
		{ month: 'Nov', expense: 40, profit: 10 },
		{ month: 'Dec', expense: 48, profit: 10 }
	];

	if (browser) {
		Chart.register(Colors, BarController, CategoryScale, LinearScale, BarElement, Tooltip, Legend);
	}

	onMount(() => {
		if (chart_element) {
			const chart = new Chart(chart_element, {
				type: 'bar',
				data: {
					labels: data.map((data) => data.month),
					datasets: [
						{
							label: 'Expense',
							data: data.map((row) => row.expense),
							backgroundColor: '#023E8A',
							barPercentage: 0.5
						},
						{
							label: 'Profit',
							data: data.map((row) => row.profit),
							backgroundColor: '#48CAE4',
							barPercentage: 0.5
						}
					]
				},
				options: {
					plugins: {
						tooltip: {
							enabled: true
						},
						legend: {
							position: 'bottom',

							labels: {
								color: '#ededed'
							}
						}
					},
					responsive: true,
					scales: {
						x: {
							stacked: true,
							ticks: {
								color: '#fff'
							},
							grid: {
								display: false
							}
						},
						y: {
							stacked: true,
							ticks: {
								color: '#fff'
							},
							grid: {
								color: '#ffffff20'
							}
						}
					}
				}
			});
		}
	});
</script>

<Widget title="Analytics" centeredTitle={true}>
	<canvas height="250px" bind:this={chart_element} id="profit-expense-chart" />
</Widget>
