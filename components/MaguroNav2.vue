<template>
	<div class="">
		<header class="absolute inset-x-0 top-0 z-50">
			<nav
				class="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div class="flex lg:flex-1">
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">MaguroNetwork</span>
						<img class="h-8 w-auto" src="/favicon.svg" alt="" />
					</a>
				</div>
				<div class="flex">
					<UButton
						color="gray"
						icon="i-heroicons-bars-3"
						variant="ghost"
						size="md"
						v-if="!mobileMenuOpen"
						:padded="false"
						@click="mobileMenuOpen = true"
					/>
				</div>
			</nav>
			<MaguroSidebar />
		</header>
	</div>
</template>

<script setup lang="ts">
const mobileMenuOpen = useSidebarState();
</script>
