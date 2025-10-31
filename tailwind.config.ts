import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1900px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        monoSocial: ['ABCSocialMono', 'sans-serif']
      },
    },
  },
  plugins: [],
}
export default config