/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'fontFamily': ['Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif;'],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
    },
    extend: {},
  },
  plugins: [],
}
  