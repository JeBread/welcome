import type {Config} from 'tailwindcss';
import {nextui} from '@nextui-org/react';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		colors: {
			blue: '#0081FF',
			black: '#2D2D2D',
			green: '#00B69B',
			yellow: '#FCBE2D',
			red: '#FD5454',
			gray: {
				100: '#FAFAFB',
				200: '#F8F8FA',
				300: '#F5F6F8',
				900: '#636566',
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
};
export default config;
