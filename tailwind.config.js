/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'yogi-blue': '#22395C'
      }
    },
  },
  plugins: [],
  // darkMode: ['class', '.darkmode'], // uncomment this to enbable dark mode by default
}
