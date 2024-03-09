<template>
	<main>
		<NuxtLayout
			v-if="page?.layout"
			:name="page.layout"
		>
			<ContentRenderer
				v-if="page?.body"
				:value="page"
			/>
		</NuxtLayout>
		<ContentRenderer
			v-else-if="page?.body"
			:value="page"
		/>
		<span v-else>something went wrong</span>
	</main>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(`page-${route.path}`, () =>
	queryContent(route.path).findOne(),
);
if (!page.value) {
	throw createError({ statusCode: 404, statusMessage: 'Page not found lol' });
}
useHead({
	title:
		page.value.title === 'MaguroNetwork'
			? 'MaguroNetwork'
			: `${page.value.title} - MaguroNetwork`,
});
</script>
