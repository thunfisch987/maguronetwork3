<template>
	<UVerticalNavigation :links="myLinks">
		<template #default="{ link, to }">
			<div class="relative text-left w-full">
				<div v-if="link.label" class="mb-2">
					{{ link.label }}
				</div>
				<UVerticalNavigation
					v-if="link.children"
					:links="link.children"
				></UVerticalNavigation>
			</div>
		</template>
	</UVerticalNavigation>
</template>

<script setup lang="ts">
import { VerticalNavigationLink } from '#ui/types/vertical-navigation';

const myLinks: MyVerticalNavigationLink[] = [
	{ label: 'MaguroNetwork', to: { name: 'index' } },
	{ label: 'Akela', to: { name: 'Akela' }, icon: 'i-heroicons-dog' },
	{ label: 'EnergyDrinkWiki', to: { name: 'EnergyDrinkWiki' } },
	{ label: 'RandomMemes', to: { name: 'RandomMemes' } },
	{ label: 'Vegalou', to: { name: 'Vegalou' } },
	{ label: 'Weebsite', to: { name: 'Weebsite' } },
	{
		label: 'Razer4Ever',
		to: { name: 'Razer4Ever' },
		children: [{ label: 'Razer4Ever' }],
	},
	{ label: 'RocketGame', href: 'https://rg.littlebitgay.de' },
];

interface MyVerticalNavigationLink extends VerticalNavigationLink {
	children?: VerticalNavigationLink[];
}
</script>
