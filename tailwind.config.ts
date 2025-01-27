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
      fontSize: {
        h1: ['2.5rem', { lineHeight: '3rem', fontWeight: '500' }], // Title 1 (Medium)
        h2: ['2.25rem', { lineHeight: '2.7rem', fontWeight: '500' }], // Title 2 (Medium)
        h3: ['2rem', { lineHeight: '2.4rem', fontWeight: '600' }], // Title 3 (SemiBold)
        h4: ['2rem', { lineHeight: '2.4rem', fontWeight: '400' }], // Title 3 (Regular)
        body1: ['1.5rem', { lineHeight: '1.8rem', fontWeight: '600' }], // Body 1 (SemiBold)
        body2: ['1.5rem', { lineHeight: '1.8rem', fontWeight: '400' }], // Body 1 (Regular)
        body3: ['1.25rem', { lineHeight: '1.5rem', fontWeight: '600' }], // Body 2 (SemiBold)
        body4: ['1.25rem', { lineHeight: '1.5rem', fontWeight: '400' }], // Body 2 (Regular)
        body5: ['1rem', { lineHeight: '1.4rem', fontWeight: '600' }], // Body 3 (SemiBold)
        body6: ['1rem', { lineHeight: '1.6rem', fontWeight: '400' }], // Body 3 (Regular)
        caption1: ['0.875rem', { lineHeight: '1.225rem', fontWeight: '600' }], // Caption 1 (SemiBold)
        caption2: ['0.875rem', { lineHeight: '1.225rem', fontWeight: '400' }], // Caption 1 (Regular)
        caption3: ['0.75rem', { lineHeight: '1.125rem', fontWeight: '600' }], // Caption 2 (SemiBold)
        caption4: ['0.75rem', { lineHeight: '1.125rem', fontWeight: '500' }], // Caption 2 (Medium)
        caption5: ['0.625rem', { lineHeight: '1.125rem', fontWeight: '600' }], // Caption 3 (SemiBold)
        caption6: ['0.625rem', { lineHeight: '1.125rem', fontWeight: '500' }], // Caption 3 (Medium)
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
