<template>
	<div>
		<slot />
		<template v-if="overvue && overvue[0].children">
			<Card
				v-for="item in overvue[0].children[0].children"
				:key="item._id"
				class="mx-8 mt-3"
			>
				<CardHeader>
					<CardTitle>{{ item.title }}</CardTitle>
					<Separator />
				</CardHeader>
				<CardContent class="flex flex-wrap">
					<ArrayUnpacker
						v-for="item2 in item.children"
						:key="item2._id"
						:yeet="item2"
					/>
				</CardContent>
			</Card>
		</template>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: overvue } = useLazyAsyncData('overvue', () =>
	fetchContentNavigation(queryContent(route.path)),
);
</script>

<style>
.groddy {
	--auto-grid-min-size: 16rem;
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(var(--auto-grid-min-size), 1fr)
	);
	gap: 1rem;
	margin-inline: 2rem;
}
</style>
<style scoped>
article img.active {
	view-transition-name: energy-pic;
}
article h3.active {
	view-transition-name: energy-title;
}
</style>
