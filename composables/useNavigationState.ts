export default function () {
	return useState<
		{ name: string; to: string; external?: boolean; original?: string }[]
	>('navigationne', () => [
		{ name: 'MaguroNetwork', to: '/' },
		{ name: 'Akela', to: '/Akela' },
		{
			name: 'EnergyDrinkWiki',
			to: '/EnergyDrinkWiki',
			original: 'https://nrg.littlebitgay.de/',
		},
		{
			name: 'RandomMemes',
			to: '/RandomMemes',
			original: 'https://rndmemes.littlebitgay.de/',
		},
		{
			name: 'Vegalou',
			to: '/Vegalou',
			original: 'https://veg.littlebitgay.de/',
		},
		{
			name: 'Weebsite',
			to: '/Weebsite',
			original: 'https://weeb.littlebitgay.de/',
		},
		{
			name: 'Razer4Ever',
			to: '/Razer4Ever',
			original: 'https://r4e.littlebitgay.de/',
		},
		{
			name: 'Rocketgame',
			to: 'https://rg.littlebitgay.de/',
			external: true,
		},
	]);
}
