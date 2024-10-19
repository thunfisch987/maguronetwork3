import withNuxt from './.nuxt/eslint.config.mjs';
import eslintConfigPrettier from 'eslint-config-prettier'

/**@type {import('@nuxt/eslint-config/flat').FlatConfig[]} */
export default withNuxt({
	plugins: [],
	rules: {
		'vue/html-indent': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ varsIgnorePattern: '^_|_' },
		],
		...eslintConfigPrettier.rules
	},
});
