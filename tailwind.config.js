/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '2rem'
			},
			colors: {
				'-taga-orange-500': '#dcaa28',
				'taga-orange': {
					50: '#fcf6ee',
					100: '#f6e6cf',
					200: '#edcc9a',
					300: '#e4ac65',
					400: '#de9241',
					500: '#d4722a',
					600: '#bc5623',
					700: '#9d3c20',
					800: '#803020',
					900: '#6a291d',
					950: '#3c130c'
				}
			},
			backgroundImage: {
				hero: "url('/src/lib/assets/hero.jpg')"
			},
			backgroundPosition: {
				half: '50vw 25%'
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				pacifico: ['Pacifico', 'cursive'],
				paytone: ['Paytone One', 'sans-serif'],
				ultra: ['Ultra', 'serif']
			}
		}
	},
	plugins: []
};
