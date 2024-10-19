<template>
	<div>
		<slot />
		<ToggleGroup v-model="currentTag">
			<ToggleGroupItem
				v-for="tag in allTags"
				:key="tag"
				:value="tag"
			>
				{{ tag }}
			</ToggleGroupItem>
		</ToggleGroup>
		<template v-if="overvue">
			<template
				v-for="[key, value] of Object.entries(overvue)"
				:key="key"
			>
				<br />
				<h2
					class="scroll-m-20 pb-2 text-4xl italic font-semibold tracking-tight transition-colors first:mt-0 text-center"
				>
					{{ key }}
				</h2>
				<ToggleGroup v-model="currentCategory">
					<ToggleGroupItem
						v-for="category in useCategoryFilter(
							allCategories,
							value,
						)"
						:key="category"
						:value="category"
					>
						{{ category }}
					</ToggleGroupItem>
				</ToggleGroup>
				<div class="flex flex-wrap justify-center">
					<template
						v-for="item2 in value"
						:key="item2.title"
					>
						<NuxtLink
							:to="item2._path"
							class="mx-auto my-4"
						>
							<NuxtImg
								:src="`/img${item2._path}.webp`"
								alt=""
								placeholder
								loading="lazy"
								preload
							/>
						</NuxtLink>
					</template>
				</div>
				<Separator />
			</template>
		</template>
	</div>
</template>

<script setup lang="ts">
const currentCategory = useState<string>('currentCategory', () => 'All');
const currentTag = useState<string>('currentTag', () => 'All');
const { data: overvue } = await useGetOverview();
const { data: allTags } = await useGetAllTags();
const { data: allCategories } = await useGetAllCategories();
</script>

<style>
.groddy {
	--auto-grid-min-size: 16rem;
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(var(--auto-grid-min-size), 1fr)
	);
	gap: 1rem;
	margin-inline: 2rem;
}
</style>
<style scoped>
article img.active {
	view-transition-name: energy-pic;
}

article h3.active {
	view-transition-name: energy-title;
}
</style>
