<template>
	<NuxtImg
		:src="`/img${text}.webp`"
		width="100px"
		height="250px"
		loading="lazy"
		preload
	/>
</template>

<script setup lang="ts">
defineProps<{ text: string }>();
</script>
