// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: {
		enabled: true,
	},
	modules: [
		'@pinia/nuxt',
		'@nuxt/content',
		'@nuxthq/studio',
		'@nuxt/image',
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
		'@nuxtjs/color-mode',
		'nuxt-icon',
	],
	experimental: {
		headNext: true,
		writeEarlyHints: true,
	},
	future: {
		typescriptBundlerResolution: true,
	},
	typescript: {
		shim: false,
		strict: true,
	},
	tailwindcss: {
		configPath: '~/tailwind.config.ts',
		editorSupport: {
			autocompleteUtil: true,
		},
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'MaguroNetwork',
			htmlAttrs: {
				lang: 'en',
			},
			meta: [{ name: 'theme-color', content: '#4e319f' }],
		},
	},
	colorMode: {
		preference: 'system',
		fallback: 'dark',
		classSuffix: '',
	},
	css: ['@/assets/tw.css'],
	shadcn: {
		prefix: '',
		componentDir: './components/ui',
	},
});
