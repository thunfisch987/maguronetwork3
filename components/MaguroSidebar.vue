<template>
	<SheetContent>
		<SheetHeader>
			<SheetTitle
				><i-logos-nuxt-icon class="h-8 w-auto" />Navigation</SheetTitle
			>
			<SheetDescription>These are the other pages</SheetDescription>
		</SheetHeader>
		<NuxtLink
			v-for="item in navLinks"
			:key="item.name"
			:to="item.to"
			class="-mx-3 flex rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-950"
		>
			<!-- <UIcon -->
			<!-- 	v-if="item.icon" -->
			<!-- 	:name="item.icon" -->
			<!-- 	class="text-2xl ml-0" -->
			<!-- 	dynamic -->
			<!-- /> -->
			<span class="mx-auto">{{ item.name }}</span>
			<ExternalLink
				v-if="item.external"
				name="i-heroicons-arrow-up-right"
			/>
		</NuxtLink>
		<SheetFooter />
	</SheetContent>
</template>
<script setup lang="ts">
const open = useState('open');
type MaguroNavLink = {
	name: string;
	to: string;
	external?: boolean;
	original?: string;
	icon?: string;
};
const { data: navigation } = await useAsyncData('navigation', () =>
	fetchContentNavigation(),
);
const navLinks = navigation.value
	?.map<MaguroNavLink>((item) => {
		return { name: item.title, to: item._path, icon: item.icon };
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
</script>
