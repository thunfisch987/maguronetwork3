<template>
	<div>
		<Dynimg :text="useRoute().path"></Dynimg>
		<slot />
		<Surround
			v-if="surrounding"
			:surrounding="surrounding"
		></Surround>
	</div>
	{{ pending }}
</template>

<script setup lang="ts">
const route = useRoute();
const { data: surrounding, pending } = useAsyncData(
	`surround-${route.path}`,
	() =>
		queryContent('energydrinkwiki/monster')
			.only(['_path', 'title'])
			// .where({ _path: { $ne: '/energydrinkwiki/monster' } })
			.findSurround(route.path),
	{
		lazy: true,
	},
);
</script>
