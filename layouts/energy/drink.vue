<template>
	<div>
		<Dynimg :text="useRoute().path"></Dynimg>
		<slot />
		<Surround
			v-if="surrounding"
			:surrounding="surrounding"
		></Surround>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: surrounding, pending } = useLazyAsyncData(
	`surround-${route.path}`,
	() =>
		queryContent('energydrinkwiki/monster')
			// .where({ _path: { $ne: '/energydrinkwiki/monster' } })
			.findSurround(
				route.path.endsWith('/') ? route.path.slice(0, -1) : route.path,
			),
	{
		transform(surrounding) {
			return surrounding.map((doc) =>
				doc.navigation === false ? null : doc,
			);
		},
	},
);
</script>
