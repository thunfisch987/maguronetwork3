<template>
	<component
		:is="icon"
		:size="size"
		:color="color"
		:strokeWidth="strokeWidth"
		:defaultClass="defaultClass"
	/>
</template>

<script setup lang="ts">
import {
	Dog,
	CupSoda,
	JapaneseYen,
	Shuffle,
	PawPrint,
	Gamepad2,
} from 'lucide-vue-next';
const props = defineProps<{
	iconname: 'dog' | 'soda' | 'weeb' | 'random' | 'veg' | 'razer';
	size?: number;
	color?: string;
	strokeWidth?: number;
	defaultClass?: string;
}>();
const iconMap: Record<typeof props.iconname, Component> = {
	dog: Dog,
	soda: CupSoda,
	weeb: JapaneseYen,
	random: Shuffle,
	veg: PawPrint,
	razer: Gamepad2,
};
const icon = computed(() => iconMap[props.iconname]);
</script>
