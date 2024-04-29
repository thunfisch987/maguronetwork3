<template>
	<NuxtLink v-if="to">
		<Card>
			<slot />
		</Card>
	</NuxtLink>
	<slot v-else />
</template>

<script setup lang="ts">
import type { NuxtLinkProps } from '#app';

defineProps<NuxtLinkProps>();
</script>
