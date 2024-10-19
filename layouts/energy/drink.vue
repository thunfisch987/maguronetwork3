<template>
	<div>
		<NuxtImg
			:src="`/img${route.path}.webp`"
			width="100px"
			height="250px"
			loading="lazy"
			preload
		/>
		<slot />
		<SurroundButtons
			v-if="surrounding"
			:surrounding="surrounding"
		/>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: surrounding } = await useLazyAsyncData(
	`surround-${route.path}`,
	() =>
		queryContent('energydrinkwiki/monster')
			// .where({ _path: { $ne: '/energydrinkwiki/monster' } })
			.findSurround(route.path),
	{
		transform(surrounding) {
			return surrounding.map((doc) =>
				doc.navigation === false ? null : doc,
			);
		},
	},
);
</script>

<style scoped>
img {
	view-transition-name: energy-pic;
}

h1 {
	view-transition-name: energy-title;
}
</style>

<style>
::view-transition-old(header),
::view-transition-new(header) {
	width: auto;
}
</style>
