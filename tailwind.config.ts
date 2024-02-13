import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      colors: {
        primary: '#7f56d9',
        primary700: '#6941C6',
        primary100: '#F4EBFF',
        primary50:'#F9F5FF',
        button:'#3673fd',
        bg:'#0d0c22',
        bgSoft:'#2d2b42',
        tc: '#475467',
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        }
      },
      screens:{
        'msm': {'max' : '639px'},
        'mxsm': {'max' : '420px'},
      },
    },
  },
  plugins: [],
}
export default config
