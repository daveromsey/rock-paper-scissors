const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
  ],
	purge: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
  ],
  theme: {
		screens: {
      'xs': '400px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        royalpurple: {
          50: "#7b10d3",
        },
      }
		},
		fontFamily: {
			sans: [ "open-sans", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" ],
			serif: [ "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif" ],
			mono: [ "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace" ],
			brand: [ "Paytone One", "sans-serif"],
			digital: [ "Digital-7", "monospace"],
			'digital-italic': [ "Digital-7-Italic", "monospace"],
		},
  },
	plugins: [
		//require('@tailwindcss/typography'),
	],
}
