<template>
	<div class="">
		<header class="absolute inset-x-0 top-0 z-50">
			<nav
				class="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div class="flex mr-auto">
					<a href="#">
						<span class="sr-only">MaguroNetwork</span>
						<img class="h-8 w-auto" src="/favicon.svg" alt="" />
					</a>
				</div>
				<ClientOnly>
					<UButton
						:icon="
							isDark
								? 'i-heroicons-moon-20-solid'
								: 'i-heroicons-sun-20-solid'
						"
						color="gray"
						variant="ghost"
						aria-label="Theme"
						class="ml-auto mr-4"
						@click="isDark = !isDark"
					/>
					<template #fallback>
						<div class="w-8 h-8"></div>
					</template>
				</ClientOnly>
					<UButton
						color="gray"
						icon="i-heroicons-bars-3"
						variant="ghost"
						size="xl"
						class="ml-auto"
						@click="mobileMenuOpen = true"
					/>
			</nav>
			<MaguroSidebar />
		</header>
	</div>
</template>

<script setup lang="ts">
const mobileMenuOpen = useSidebarState();
const colorMode = useColorMode();
const isDark = computed({
	get() {
		return colorMode.value === 'dark';
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
	},
});
</script>
