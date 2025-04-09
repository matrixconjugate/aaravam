/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        backgroundImage: {
          'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
        },
      },
    },
  plugins: [],
}