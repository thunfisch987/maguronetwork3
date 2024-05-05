<template>
	<div>
		<slot />
		<div class="griddy">
			<NuxtLink
				v-for="item in navigation"
				:key="item._path"
				:to="item._path"
				class="contents"
			>
				<Card
					class="hover:bg-muted hover:scale-105 ease-in-out duration-200 [&_#chevvie]:hover:scale-125 [&_#chevvie]:hover:text-primary"
				>
					<CardHeader>
						<CardTitle>{{ item.title }}</CardTitle>
						<CardDescription />
					</CardHeader>
					<CardContent> Card Content </CardContent>
					<CardFooter>
						<DynamicIcon :iconname="item.icon" />
						<CircleChevronRight
							id="chevvie"
							class="ml-auto ease-in-out duration-300 text-muted"
						/>
					</CardFooter>
				</Card>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/types';
import { CircleChevronRight } from 'lucide-vue-next';

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
