<template>
	<header class="">
		<nav
			class="flex items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<div class="flex mr-auto">
				<NuxtLink to="/">
					<span class="sr-only">MaguroNetwork</span>
					<Icon
						class="h-8 w-auto"
						name="i-logos-nuxt-icon"
					/>
				</NuxtLink>
			</div>
			<ClientOnly>
				<Button
					variant="ghost"
					aria-label="Theme"
					class="ml-auto mr-4"
					size="icon"
					@click="appStore.toggleColorMode()"
				>
					<Moon v-if="appStore.isDark" />
					<Sun v-else />
				</Button>
				<template #fallback>
					<div class="w-8 h-8">n</div>
				</template>
			</ClientOnly>
			<Sheet v-model:open="open">
				<SheetTrigger
					variant="ghost"
					size="icon"
				>
					<Menu />
				</SheetTrigger>
				<MaguroSidebar />
			</Sheet>
		</nav>
	</header>
</template>

<script setup lang="ts">
const open = useState('open', () => false);
import { Menu, Moon, Sun } from 'lucide-vue-next';
const appStore = useAppStore();
</script>
