<template>
	<article class="flex flex-row">
		<NuxtLink
			v-if="!yeet.children"
			:to="yeet._path"
			class="yeetus"
			@click="setActive"
		>
			<Card>
				<CardHeader>
					<CardTitle :class="{ active: active === yeet._path }">{{
						yeet.title
					}}</CardTitle>
				</CardHeader>
				<CardContent class="flex">
					<NuxtImg
						:src="`/img${yeet._path}.webp`"
						height="100"
						class="ml-auto mr-auto"
						:class="{ active: active === yeet._path }"
					/>
				</CardContent>
			</Card>
		</NuxtLink>
		<Card v-else>
			<CardHeader>
				<CardTitle>{{ yeet.title }}</CardTitle>
			</CardHeader>
			<CardContent class="flex">
				<ArrayUnpacker
					v-for="item3 in yeet.children"
					:key="item3.title"
					:yeet="item3"
				/>
			</CardContent>
		</Card>
	</article>
</template>

<script setup lang="ts">
import type { NavItem } from '@nuxt/content/types';

const props = defineProps<{ yeet: NavItem }>();
const active = useState('active-energy');
const setActive = () => {
	console.log(props.yeet._path);
	active.value = props.yeet._path;
	console.log(active.value);
};
</script>
