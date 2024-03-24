// https://nuxt.com/docs/api/configuration/nuxt-config
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';

export default defineNuxtConfig({
	devtools: {
		enabled: true,
	},
	modules: [
        '@pinia/nuxt',
        '@nuxt/content',
        '@nuxt/image',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxtjs/color-mode',
        'unplugin-icons/nuxt',
        "@nuxt/eslint"
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
			meta: [
				{ name: 'theme-color', content: '#4e319f' },
				{ name: 'color-scheme', content: 'dark' },
			],
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
	vue: {
		compilerOptions: {
			isCustomElement: (tag) => tag.startsWith('i-'),
		},
	},
	vite: {
		plugins: [
			Components({
				resolvers: [IconsResolver()],
			}),
			Icons({}),
		],
	},
});