import { url } from 'inspector'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'satoshi': ["satoshi"],
      'integral-cf-bold': ["integral-cf-bold"],
      'satoshi-medium': ["satoshi-medium"],
      'satoshi-bold': ["satoshi-bold"]
    },
    extend: {
      backgroundImage: (theme) => ({
        'main-screen': "url('../public/elements/MainScreenFull.svg')",
        'main-screen-mobile': "url('../public/elements/MainScreenMobile.svg')",
        'mobile-background': "url('../public/elements/MobileBackground.svg')",
        'diamond-sm': "url('../public/elements/Diamond.svg')",
        'diamond-lg': "url('../public/elements/Diamond2.svg')",
      }),
      colors: {
        'spanish-gray': '#9a9a9a',
      }
    },
  },
  plugins: [],
}
export default config
