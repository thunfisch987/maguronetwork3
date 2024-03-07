<template>
	<div class="griddy">
		<Card v-for="item in navigation">
			<CardHeader>
				<CardTitle
					>{{ item.title
					}}<Icon
						v-if="item.icon"
						:name="item.icon"
				/></CardTitle>
				<CardDescription></CardDescription>
			</CardHeader>
			<CardContent> Card Content </CardContent>
			<CardFooter> Card Footer </CardFooter>
		</Card>
				<CardFooter><DynamicIcon :iconname="item.icon" /></CardFooter>
	</div>
	<slot />
</template>

<script setup lang="ts">
const { data: navigation } = useLazyAsyncData('navigation', () =>
	fetchContentNavigation(),
);
</script>

<style>
.griddy {
	--auto-grid-min-size: 16rem;
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(var(--auto-grid-min-size), 1fr)
	);
	gap: 1rem;
}
</style>
