/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				bigshoulders: ['"Big Shoulders"', "sans-serif"],
				quicksand: ["Quicksand", "sans-serif"]
			},
			colors: {
				gold: "#c99103",
				burgandy: "#cf5013",
				black: "#000000",
				white: "#ffffff",
				maroon: "#392b04"
			}
		}
	},
	plugins: []
};
