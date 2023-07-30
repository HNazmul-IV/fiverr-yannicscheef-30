<script lang="ts">
	import vehicles_Image from './assets/img/vehicle.png';
</script>

<div class="flex flex-col gap-4 p-5 rounded-xl box">
	<p class="text-4xl text">Vehicles</p>
	<div class="flex justify-center items-center gap-1">
		<p>
			<svg
				width="16"
				height="31"
				viewBox="0 0 16 31"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M14.4169 1L1.99999 15.3516"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M2 15.3516L14.4169 29.7031"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
		</p>
		<img class="w-[356px] h-[217.72px] object-contain" src={vehicles_Image} alt="" />
		<p>
			<svg
				width="15"
				height="31"
				viewBox="0 0 15 31"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1.41696 1L13.8339 15.3516"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
				/>
				<path
					d="M13.8339 15.3516L1.41695 29.7031"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
				/>
			</svg>
		</p>
	</div>
	<div class="flex justify-center items-center gap-1">
		<button>
			<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="4" cy="4" r="4" fill="#D9D9D9" fill-opacity="0.5" />
			</svg>
		</button>
		<button>
			<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="4" cy="4" r="4" fill="#D9D9D9" />
			</svg>
		</button>
		<button>
			<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="4" cy="4" r="4" fill="#D9D9D9" fill-opacity="0.5" />
			</svg>
		</button>
	</div>
</div>

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
</style>
