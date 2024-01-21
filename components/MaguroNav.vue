<template>
	<div class="">
		<header class="absolute inset-x-0 top-0">
			<nav
				class="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div class="flex mr-auto">
					<a href="#">
						<span class="sr-only">MaguroNetwork</span>
						<UIcon
							class="h-8 w-auto"
							name="i-logos-nuxt-icon"
							dynamic
						/>
					</a>
				</div>
				<ClientOnly>
					<UButton
						:icon="
							appStore.isDark
								? 'i-heroicons-moon-20-solid'
								: 'i-heroicons-sun-20-solid'
						"
						color="gray"
						variant="ghost"
						aria-label="Theme"
						class="ml-auto mr-4"
						@click="appStore.toggleColorMode"
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
					@click="appStore.toggleSidebar()"
				/>
			</nav>
			<MaguroSidebar />
		</header>
	</div>
</template>

<script setup lang="ts">
const appStore = useAppStore();
</script>
