<template>
	<div class="grid grid-cols-2 grid-rows-1 gap-10 mt-96 mb-8 mx-4">
		<Button
			v-if="surrounding[0]"
			:variant="buttonVar"
			style="grid-area: 1/1"
			class="[&:hover>svg]:border-green-500 [&:hover>svg]:text-green-400"
			@click="navigateTo(surrounding[0]._path)"
		>
			<MoveLeft class="ml-0 border-input border rounded-full" />
			<span class="ml-auto mr-auto">{{ surrounding[0].title }}</span>
		</Button>
		<Button
			v-if="surrounding[1]"
			:variant="buttonVar"
			style="grid-area: 1 / 2"
			@click="navigateTo(surrounding[1]._path)"
		>
			<span class="ml-auto mr-auto">{{ surrounding[1].title }}</span>
			<MoveRight class="mr-0" />
		</Button>
	</div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/types';
import { MoveLeft, MoveRight } from 'lucide-vue-next';

const buttonVar = 'outline';

defineProps<{
	surrounding: (ParsedContent | null)[];
}>();
</script>
