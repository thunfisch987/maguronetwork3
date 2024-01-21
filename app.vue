<template>
	<NuxtLoadingIndicator :throttle="0" />
	<NuxtLayout name="default">
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
useHead({
	title:
		useRoute().name === 'index'
			? 'MaguroNetwork'
			: useRoute().name?.toString(),
});
</script>
