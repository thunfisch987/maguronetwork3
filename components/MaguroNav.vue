<template>
	<UVerticalNavigation :links="myLinks"> </UVerticalNavigation>
</template>

<script setup lang="ts">
import { VerticalNavigationLink } from '#ui/types/vertical-navigation';

const myLinks: VerticalNavigationLink[] = [
	{
		label: 'MaguroNetwork',
		to: { name: 'index' },
	},
	{
		label: 'Akela',
		to: { name: 'Akela' },
		icon: 'i-fluent-emoji-high-contrast-dog-face',
	},
	{
		label: 'EnergyDrinkWiki',
		to: { name: 'EnergyDrinkWiki' },
		icon: 'i-game-icons-soda-can',
	},
	{ label: 'Vegalou', to: { name: 'Vegalou' } },
	{ label: 'Weebsite', to: { name: 'Weebsite' } },
	{
		label: 'Razer4Ever',
		to: { name: 'Razer4Ever' },
		icon: 'i-simple-icons-razer',
	},
	{ label: 'RocketGame', href: 'https://rg.littlebitgay.de' },
];

// const links2: MyVerticalNavigationLink[] = useRouter()
// 	.getRoutes()
// 	.filter((route) => route.name)
// 	.map(function (route): MyVerticalNavigationLink {
// 		return {
// 			label: route.name!.toString(),
// 			to: route.path,
// 		};
// 	});
</script>
