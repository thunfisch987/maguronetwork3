import { defineStore } from 'pinia';

export const useAppStore = defineStore('appState', () => {
	// sidebar State stuff
	const sidebarState = ref(false);
	function toggleSidebar() {
		sidebarState.value = !sidebarState.value;
	}
	
	// colorMode State stuff
	const colorMode = useColorMode();
	const isDark = computed(() => colorMode.value === 'dark');
	function toggleColorMode() {
		colorMode.preference = isDark.value ? 'light' : 'dark';
	}

	return { sidebarState, toggleSidebar, isDark, toggleColorMode };
});
