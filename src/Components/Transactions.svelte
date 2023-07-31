<script lang="ts">
	import Widget from './Widget.svelte';

	const tn_data = [
		{
			type: 'deposit',
			name: 'Jhone Doe',
			time: '',
			amount: '1.000,00 €'
		},
		{
			type: 'deposit',
			name: 'Jhone Doe',
			time: '',
			amount: '1.000,00 €'
		},
		{
			type: 'withdraw',
			name: 'Jhone Doe',
			time: '',
			amount: '1.000,00 €'
		},
		{
			type: 'deposit',
			name: 'Jhone Doe',
			time: '',
			amount: '1.000,00 €'
		}
	];
</script>

<Widget title="Transaction">
	<div class="">
		{#each tn_data as tn}
			<div class="flex items-center py-1">
				{#if tn.type === 'deposit'}
					<svg
						width="26"
						height="31"
						viewBox="0 0 26 31"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M22.1 18.0833C23.1343 18.0833 24.1263 18.4916 24.8577 19.2183C25.5891 19.945 26 20.9306 26 21.9583V22.8819C26 27.5022 20.527 31 13 31C5.473 31 0 27.6843 0 22.8819V21.9583C0 20.9306 0.410892 19.945 1.14228 19.2183C1.87368 18.4916 2.86566 18.0833 3.9 18.0833H22.1ZM13 0C14.0243 -1.51656e-08 15.0386 0.20046 15.9849 0.589934C16.9313 0.979407 17.7911 1.55027 18.5154 2.26992C19.2397 2.98958 19.8143 3.84393 20.2063 4.7842C20.5982 5.72448 20.8 6.73226 20.8 7.75C20.8 8.76774 20.5982 9.77552 20.2063 10.7158C19.8143 11.6561 19.2397 12.5104 18.5154 13.2301C17.7911 13.9497 16.9313 14.5206 15.9849 14.9101C15.0386 15.2995 14.0243 15.5 13 15.5C10.9313 15.5 8.94735 14.6835 7.48457 13.2301C6.02178 11.7767 5.2 9.80543 5.2 7.75C5.2 5.69457 6.02178 3.72333 7.48457 2.26992C8.94735 0.816515 10.9313 3.06283e-08 13 0Z"
							fill="white"
						/>
					</svg>
				{:else if tn.type === 'withdraw'}
					<svg
						width="23"
						height="30"
						viewBox="0 0 23 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 0V30H9.85714V24.1667H13.1429V30H23V0H0ZM3.28571 3.33333H6.57143V6.66667H3.28571V3.33333ZM9.85714 3.33333H13.1429V6.66667H9.85714V3.33333ZM16.4286 3.33333H19.7143V6.66667H16.4286V3.33333ZM3.28571 10H6.57143V13.3333H3.28571V10ZM9.85714 10H13.1429V13.3333H9.85714V10ZM16.4286 10H19.7143V13.3333H16.4286V10ZM3.28571 16.6667H6.57143V20H3.28571V16.6667ZM9.85714 16.6667H13.1429V20H9.85714V16.6667ZM16.4286 16.6667H19.7143V20H16.4286V16.6667ZM3.28571 23.3333H6.57143V26.6667H3.28571V23.3333ZM16.4286 23.3333H19.7143V26.6667H16.4286V23.3333Z"
							fill="#F8F8F8"
						/>
					</svg>
				{/if}
				<div class="leading-tight ml-4">
					<h5 class="!font-normal text-lg">Jhon Doe</h5>
					<p class="text-[11px] !font-light">27:07</p>
				</div>
				<div class=" ml-auto">
					{#if tn.type === 'deposit'}
						<p class="text-green-600">1.000,00 €</p>
					{:else if tn.type === 'withdraw'}
						<p class="text-red-600">- 1.000,00 €</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</Widget>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
	.box {
		max-width: 424px;
		max-height: 371px;
		box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.25);
	}
	.text {
		font-family: 'Nunito', sans-serif;
	}
	.currency {
		color: rgba(25, 220, 44, 1);
	}
</style>
