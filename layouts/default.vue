<template>
	<div>
		<MaguroNav />
		<slot />
	</div>
</template>

<script setup>
const { $pwa } = useNuxtApp();
</script>
