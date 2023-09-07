import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        green: '#92bf19',
        purple: '#be78be',
        red: '#ff3700',
        blue: '#00b7ee',
        brown: '#a07850',
        yellow: '#e4b700',
        bug: '#32b432',
        grey: '#a0a0a0'
      }
    }
  },
  plugins: []
};
export default config;
