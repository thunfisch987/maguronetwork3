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
			<NuxtLink :to="{ name: '' }">{{ props.brandname }}</NuxtLink>
		</template>
	</UCard>
</template>

<script setup lang="ts">
const props = defineProps<{
	brandname: string;
	image: string;
}>();
</script>
