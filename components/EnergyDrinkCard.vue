<template>
	<UCard>
		<template #header>
			{{ props.brandname }}
		</template>
		<template
			><img
				:src="props.image"
				:alt="props.brandname"
		/></template>
		<template #footer>
			<NuxtLink :to="{name: props.link}">{{ props.brandname }}</NuxtLink>
		</template>
	</UCard>
</template>

<script setup lang="ts">
import type { RoutesNamesList } from '@typed-router/__routes';


type EnergyDrinkWikiRoutes = "monster-energy"|"juiced-monster"|"zero-zucker"|"rehab-monster"
type EnergyDrinkWikiRoutes2 = `EnergyDrinkWiki-${EnergyDrinkWikiRoutes}`

const props = defineProps<{
	brandname: string;
	image: string;
	link: EnergyDrinkWikiRoutes2;
}>();
</script>
