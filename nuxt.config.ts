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
});
