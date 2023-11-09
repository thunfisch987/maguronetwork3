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
				header: {
					base: 'flex items-center justify-between',
					padding: 'p-6 lg:px-8',
				},
			}"
		>
			<template #header>
				<div class="flex mr-auto">
					<a href="/">
						<span class="sr-only">MaguroNetwork</span>
						<UIcon class="h-8 w-auto" name="i-logos-nuxt-icon" />
					</a>
				</div>
				<UButton
					color="gray"
					variant="ghost"
					icon="i-heroicons-x-mark-20-solid"
					size="xl"
					class="ml-auto"
					@click="mobileMenuOpen = false"
				/>
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
