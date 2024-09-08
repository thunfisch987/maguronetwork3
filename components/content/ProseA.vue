<template>
	<Button
		variant="link"
		as-child
	>
		<NuxtLink
			:href="href"
			:target="target"
		>
			<slot />
		</NuxtLink>
	</Button>
</template>

<script setup lang="ts">
defineProps({
	href: {
		type: String,
		default: '',
	},
	target: {
		type: String,
		default: undefined,
		required: false,
	},
});
</script>
