<template>
	<div>
		<slot />
		<div v-if="overvue && overvue[0] && overvue[0].children">
			<div
				v-for="(item, index) in overvue[0].children[0].children"
				:key="index"
			>
				<NuxtLink
					:to="item._path"
					style="color: #00dc82"
				>
					<pre :class="preStyle">{{ item.title }}</pre>
				</NuxtLink>
				<div
					v-for="(item2, index) in item.children"
					:key="index"
				>
					<NuxtLink :to="item2._path">
						<pre :class="preStyle">	{{ item2.title }}</pre>
					</NuxtLink>
					<div v-for="(item3, index) in item2.children">
						<NuxtLink :to="item3._path">
							<pre :class="preStyle">		{{ item3.title }}</pre>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: overvue, pending } = useLazyAsyncData('overvue', () =>
	fetchContentNavigation(queryContent(route.path)),
);
const preStyle = ['hover:bg-muted'];
</script>

<style>
.comments ul {
	padding-left: 16px;
	margin: 6px 0;
}
</style>
