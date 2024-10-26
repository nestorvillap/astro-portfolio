/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'bg': '#2B4560', 
				'accent': '#61C9DE',
				'subaccent':'#54A0BF',
				'primary': '#6AA4B0' ,
				'secondary': '#2F6D80',
				'text': '#B8BCCF'
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
	safelist: [
		'text-accent',
		'text-subaccent',
		'font-light',
		'font-medium'
	],
}
