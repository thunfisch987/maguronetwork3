// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@vite-pwa/nuxt', '@nuxt/ui'],
	experimental: {
		typedPages: true,
		headNext: true,
		typescriptBundlerResolution: true,
		writeEarlyHints: true,
	},
	typescript: {
		shim: false,
	},
	tailwindcss: {
		configPath: '~/tailwind.config.ts',
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
		},
	},
	colorMode: {
		preference: 'dark',
		fallback: 'dark',
	},
	pwa: {
		client: {
			installPrompt: true,
		},
		registerType: 'autoUpdate',
		includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
		manifest: {
			name: 'MaguroNetwork v3',
			short_name: 'MaguroNetwork3',
			theme_color: '#ffffff',
			description: 'Magu Magu Netw',
			icons: [
				{
					src: 'pwa-64x64.png',
					sizes: '64x64',
					type: 'image/png',
				},
				{
					src: 'pwa-192x192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: 'pwa-512x512.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any',
				},
				{
					src: 'maskable-icon-512x512.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any maskable',
				},
			],
		},
		workbox: {
			navigateFallback: '/',
			globPatterns: ['**/*.{js,ts,css,html,png,svg,ico}'],
		},
	},
});
