<template>
	<div>
		<MaguroNav />
		<slot />
		<ClientOnly>
			<UButton @click="$pwa.install">Install, i guess</UButton>
		</ClientOnly>
	</div>
</template>

<script setup>
const { $pwa } = useNuxtApp();
</script>
