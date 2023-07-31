<script lang="ts">
	import { browser } from '$app/environment';
	import Widget from './Widget.svelte';
	import vehicles_Image from './assets/img/vehicle.png';
	import { register } from 'swiper/element/bundle';

	if (browser) {
		register();
	}
</script>

<Widget defaultPadding={false}>
	<div class="p-4 px-8" slot="title">
		<h3 class="text-3xl !font-light">Vehicle</h3>
	</div>
	<swiper-container navigation={true} pagination={true} id="vehicle-slider">
		{#each [...new Array(3)] as d, i}
			<swiper-slide class="">
				<div class="relative mx-auto w-10/12 overflow-hidden">
					<div class="image">
						<img src={vehicles_Image} class="d-block w-full rounded-xl" alt="" />
					</div>
					<div
						class="absolute flex to-black items-center rounded-bl-xl rounded-br-xl from-black/10 bg-gradient-to-b justify-between p-5 bottom-0 left-0 w-full"
					>
						<div class="leading-tight">
							<p class="text-lg">Corvete C7</p>
							<p>399-39-2uk</p>
						</div>
						<div class="leading-tight text-right">
							<p>Alex Mustermann</p>
							<p class="text-xl">€ 2199,00</p>
						</div>
					</div>
					<div class="badge absolute top-3 left-3 bg-secondary-900">leased</div>
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>
</Widget>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
	.box {
		max-width: 424px;
		max-height: 352px;
		box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.25);
	}
	.text {
		font-family: 'Nunito', sans-serif;
	}
	swiper-container::part(wrapper) {
		padding-bottom: 38px;
	}
	swiper-container::part(bullet) {
		background-color: white;
		opacity: 0.5;
	}
	swiper-container::part(bullet-active) {
		background-color: white;
	}
	swiper-container::part(button-prev) {
		color: white;
		transform: scale(0.8);
	}
	swiper-container::part(button-next) {
		color: white;
		transform: scale(0.8);
	}
</style>
