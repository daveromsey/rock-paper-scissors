/**
 * Tailwind configuration.
 */

const defaultTheme = require( 'tailwindcss/defaultTheme' );

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
  ],
	darkMode: 'class',
  theme: {
		screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        retropurple: {
          40: "#d9abf3",
          50: "#E0A6DB",
          100: "#E6C1E3",
          200: "#B362AC",
          500: "#591c89",
          600: "#341C47",
        },
      }
		},
		fontFamily: {
			sans: [ "Open Sans", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" ],
			serif: [ "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif" ],
			mono: [ "Consolas", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Liberation Mono", "Courier New", "monospace" ],
			brand: [ "Paytone One", "sans-serif"],
			digital: [ "Digital-7", "monospace"],
			'digital-italic': [ "Digital-7-Italic", "monospace"],
		},
  },
	plugins: [
		//require('@tailwindcss/typography'),
	],
}
