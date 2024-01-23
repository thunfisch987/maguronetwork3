<template>
	<USlideover
		v-model="appStore.sidebarState"
		:overlay="false"
		class="backdrop-blur-sm"
		:ui="{
			background: 'bg-transparent dark:bg-transparent',
		}"
	>
		<UCard
			class="flex flex-col flex-1"
			:ui="{
				body: { base: 'flex-1' },
				ring: '',
				background: 'bg-transparent dark:bg-transparent',
				header: {
					base: 'flex items-center justify-between',
					padding: 'p-6 lg:px-8',
				},
				divide: 'divide-y divide-gray-100 dark:divide-gray-800',
			}"
		>
			<template #header>
				<div class="flex mr-auto">
					<a href="/">
						<span class="sr-only">MaguroNetwork</span>
						<UIcon
							class="h-8 w-auto"
							name="i-logos-nuxt-icon"
						/>
					</a>
				</div>
				<UButton
					color="gray"
					variant="ghost"
					icon="i-heroicons-x-mark-20-solid"
					size="xl"
					class="ml-auto"
					@click="appStore.toggleSidebar()"
				/>
			</template>

			<ULink
				v-for="item in navLinks"
				:key="item.name"
				:to="item.to"
				class="-mx-3 block rounded-lg px-3 py-2 text-center text-lg font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-950"
			>
				{{ item.name }}
				<UIcon
					v-if="item.external"
					name="i-heroicons-arrow-up-right"
				/>
			</ULink>

			<template #footer></template>
		</UCard>
	</USlideover>
</template>
<script setup lang="ts">
type NavLink = {
	name: string;
	to: string;
	external?: boolean;
	original?: string;
};
const { data: navigation } = await useAsyncData('navigation', () =>
	fetchContentNavigation(),
);
const navLinks = navigation.value
	?.map<NavLink>((item) => {
		return { name: item.title, to: item._path };
	})
	.toSorted((a, b) => {
		return a.to > b.to ? 1 : -1;
	})
	.concat([
		{
			name: 'RocketGame',
			to: 'https://rg.littlebitgay.de',
			external: true,
		},
	]);

const appStore = useAppStore();
</script>
