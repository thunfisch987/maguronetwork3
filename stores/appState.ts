import { defineStore } from 'pinia';

export const useAppStore = defineStore('appState', () => {
	// colorMode State stuff
	const colorMode = useColorMode();
	const isDark = computed(() => colorMode.value === 'dark');
	function toggleColorMode() {
		colorMode.preference = isDark.value ? 'light' : 'dark';
	}

	return { isDark, toggleColorMode };
});
