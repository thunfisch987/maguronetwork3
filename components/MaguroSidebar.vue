<template>
	<USlideover
		v-model="mobileMenuOpen"
		:overlay="false"
		class="backdrop-blur-sm"
		:ui="{
			background: 'bg-transparent dark:bg-transparent',
		}"
	>
		<UCard
			class="flex flex-col flex-1"
			:ui="{
				body: { base: 'flex-1' },
				ring: '',
				background: 'bg-transparent dark:bg-transparent',
			}"
		>
			<template #header>
				<div class="flex items-center justify-between">
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">MaguroNetwork</span>
						<UIcon class="h-8 w-auto" name="i-logos-nuxt-icon" />
					</a>
					<UButton
						color="gray"
						variant="ghost"
						icon="i-heroicons-x-mark-20-solid"
						class="-my-1"
						@click="mobileMenuOpen = false"
					/>
				</div>
			</template>

			<ULink
				v-for="item in navigation"
				:key="item.name"
				:to="item.href"
				class="-mx-3 block rounded-lg px-3 py-2 text-center text-lg font-semibold leading-7 text-gray-100 hover:bg-gray-950"
			>
				{{ item.name }}
				<UIcon
					v-if="
						item.name === 'Rocketgame' || item.name === 'Razer4Ever'
					"
					name="i-heroicons-arrow-up-right"
				/>
			</ULink>

			<template #footer></template>
		</UCard>
	</USlideover>
</template>
<script setup lang="ts">
const navigation = [
	{ name: 'MaguroNetwork', href: '#' },
	{ name: 'Akela', href: '#' },
	{ name: 'EnergyDrinkWiki', href: '#' },
	{ name: 'RandomMemes', href: '#' },
	{ name: 'Vegalou', href: '#' },
	{ name: 'Weebsite', href: '#' },
	{ name: 'Razer4Ever', href: '#' },
	{ name: 'Rocketgame', href: '#' },
];

const mobileMenuOpen = useSidebarState();
</script>
