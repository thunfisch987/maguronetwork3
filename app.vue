<template>
	<div>
		<!-- <VitePwaManifest /> -->
		<NuxtLoadingIndicator :throttle="0" />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
useHead({
	title: useRoute().name === 'index' ? 'MaguroNetwork' : useRoute().name,
});
</script>
