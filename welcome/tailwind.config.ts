import type {Config} from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		colors: {
			blue: {
				100: '#E8F1FB',
				900: '#0081FF',
			},
			black: '#2D2D2D',
			green: {
				100: '#F2FBFA',
				900: '#00B69B',
			},
			yellow: {
				100: '#FFFAF4',
				900: '#FCBE2D',
			},
			red: {
				100: '#FFF6F6',
				900: '#FD5454',
			},
			gray: {
				100: '#FAFAFB',
				200: '#F8F8FA',
				300: '#F5F6F8',
				900: '#636566',
			},
		},
	},
};
export default config;
