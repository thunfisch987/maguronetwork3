import type { Config } from 'tailwindcss';
export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				myprimary: {
					'50': '#eeefff',
					'100': '#e0e1ff',
					'200': '#c9c8fd',
					'300': '#a8a6fb',
					'400': '#9083f6',
					'500': '#7e65ef',
					'600': '#7048e3',
					'700': '#623ac8',
					'800': '#4e319f',
					'900': '#422f80',
					'950': '#281c4a',
				},
			},
		},
	},
};
