<template>
	<UVerticalNavigation :links="myLinks">
	</UVerticalNavigation>
</template>

<script setup lang="ts">
import { VerticalNavigationLink } from '#ui/types/vertical-navigation';

const myLinks: VerticalNavigationLink[] = [
	{ label: 'MaguroNetwork', to: { name: 'index' } },
	{ label: 'Akela', to: { name: 'Akela' }, icon: 'i-heroicons-dog' },
	{ label: 'EnergyDrinkWiki', to: { name: 'EnergyDrinkWiki' } },
	{ label: 'RandomMemes', to: { name: 'RandomMemes' } },
	{ label: 'Vegalou', to: { name: 'Vegalou' } },
	{ label: 'Weebsite', to: { name: 'Weebsite' } },
	{
		label: 'Razer4Ever',
		to: { name: 'Razer4Ever' },
	},
	{ label: 'RocketGame', href: 'https://rg.littlebitgay.de' },
];
</script>
