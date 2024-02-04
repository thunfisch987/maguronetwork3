<template>
	<div class="w-full grid grid-cols-2 grid-rows-1 gap-10">
		<UButton
			:to="surrounding[0]._path"
			icon="i-heroicons-arrow-left"
			truncate
			variant="soft"
			size="md"
		>
			{{ surrounding[0].title }}
		</UButton>
		<UButton
			:to="surrounding[1]._path"
			icon="i-heroicons-arrow-right"
			trailing
			truncate
			variant="soft"
			size="md"
		>
			{{ surrounding[1].title }}
		</UButton>
	</div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/types';

const props = defineProps<{
	surrounding: Pick<ParsedContent, '_path' | 'title'>[];
}>();
</script>
