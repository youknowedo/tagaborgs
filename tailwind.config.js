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
				'cleo-yellow': '#dcaa28'
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
