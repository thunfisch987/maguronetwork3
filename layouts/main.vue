<template>
	<slot />
	<div class="griddy">
		<NuxtLink
			v-for="item in navigation"
			:to="item._path"
		>
			<Card
				class="hover:bg-muted hover:scale-105 ease-in-out duration-300"
			>
				<CardHeader>
					<CardTitle>{{ item.title }}</CardTitle>
					<CardDescription></CardDescription>
				</CardHeader>
				<CardContent> Card Content </CardContent>
				<CardFooter><DynamicIcon :iconname="item.icon" /></CardFooter>
			</Card>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/types';

const { data: navigation }: { data: globalThis.Ref<NavItem[] | null> } =
	useNuxtData('navigation');
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
	margin-inline: 2rem;
}
</style>
