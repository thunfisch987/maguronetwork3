/** @type {import("prettier").Config}*/
const config = {
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	singleAttributePerLine: false,
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindConfig: './tailwind.config.ts',
};

export default config;
