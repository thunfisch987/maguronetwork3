<template>
	<h1
		:id="id"
		class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
	>
		<a
			v-if="generate"
			:href="`#${id}`"
		>
			<slot />
		</a>
		<slot v-else />
	</h1>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports';

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h1);
</script>
