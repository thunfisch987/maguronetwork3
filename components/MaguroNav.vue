<template>
	<header class="">
		<nav
			class="flex items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<div class="flex mr-auto">
				<NuxtLink to="/">
					<span class="sr-only">MaguroNetwork</span>
					<ILogosNuxtIcon class="h-8 w-auto" />
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
					<Moon v-if="!appStore.isDark" />
					<Sun v-else />
				</Button>
				<template #fallback>
					<div class="w-10 h-10 ml-auto mr-4" />
				</template>
			</ClientOnly>
			<Sheet v-model:open="open">
				<SheetTrigger
					variant="ghost"
					size="icon"
					aria-label="Open Navigation Menu"
				>
					<Menu />
				</SheetTrigger>
				<MaguroSidebar />
			</Sheet>
		</nav>
	</header>
</template>

<script setup lang="ts">
import { Menu, Moon, Sun } from 'lucide-vue-next';
const open = useState('open', () => false);
const appStore = useAppStore();
</script>
