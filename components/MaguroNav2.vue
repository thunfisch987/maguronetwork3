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
</script>
