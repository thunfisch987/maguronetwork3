// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	experimental: {
		typedPages: true,
		headNext: true,
		typescriptBundlerResolution: true,
		writeEarlyHints: true,
	},
	typescript: {
		shim: false,
	},
});
