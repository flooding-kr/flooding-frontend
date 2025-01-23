import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '100': 'var(--color-gray-100)',
          '200': 'var(--color-gray-200)',
          '300': 'var(--color-gray-300)',
          '400': 'var(--color-gray-400)',
          '500': 'var(--color-gray-500)',
          '600': 'var(--color-gray-600)',
          '700': 'var(--color-gray-700)',
          '800': 'var(--color-gray-800)',
          '900': 'var(--color-gray-900)',
        },
        main: {
          '100': 'var(--color-main-100)',
          '200': 'var(--color-main-200)',
          '300': 'var(--color-main-300)',
          '400': 'var(--color-main-400)',
          '500': 'var(--color-main-500)',
          '600': 'var(--color-main-600)',
        },
        transparent: 'transparent',
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        error: 'var(--color-error)',
        success: 'var(--color-success',
      },
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
    },
    screens: {
      mobile: { max: '640px' },
    },
  },
  plugins: [],
};
export default config;
