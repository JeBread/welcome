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
			boxShadow: {
				box: '5px 5px 30px rgba(231, 231, 231, 0.2)',
				select: '0 4px 4px rgba(0,129,255, 0.1)',
			},
		},
		colors: {
			white: '#ffffff',
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
	darkMode: 'class',
	plugins: [nextui()],
};
export default config;
