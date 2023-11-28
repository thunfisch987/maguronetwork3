/** @type {import("prettier").Config}*/
const config = {
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	singleAttributePerLine: true,
	plugins: ['prettier-plugin-tailwindcss', 'prettier-plugin-organize-imports'],
	tailwindConfig: './tailwind.config.ts',
};

export default config;
