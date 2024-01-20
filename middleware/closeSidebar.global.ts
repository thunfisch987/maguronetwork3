export default defineNuxtRouteMiddleware(() => {
	useAppStore().sidebarState = false;
});
