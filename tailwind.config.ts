import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
    './src/widgets/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/entities/**/*.{js,ts,jsx,tsx}',
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
        success: 'var(--color-success)',
      },
      fontSize: {
        title1M: ['2.5rem', { lineHeight: '3rem', fontWeight: '500' }], // Title 1 (Medium)
        title2M: ['2.25rem', { lineHeight: '2.7rem', fontWeight: '500' }], // Title 2 (Medium)
        title3B: ['2rem', { lineHeight: '2.4rem', fontWeight: '600' }], // Title 3 (SemiBold)
        title3R: ['2rem', { lineHeight: '2.4rem', fontWeight: '400' }], // Title 3 (Regular)
        body1B: ['1.5rem', { lineHeight: '1.8rem', fontWeight: '600' }], // Body 1 (SemiBold)
        body1R: ['1.5rem', { lineHeight: '1.8rem', fontWeight: '400' }], // Body 1 (Regular)
        body2B: ['1.25rem', { lineHeight: '1.5rem', fontWeight: '600' }], // Body 2 (SemiBold)
        body2R: ['1.25rem', { lineHeight: '1.5rem', fontWeight: '400' }], // Body 2 (Regular)
        body3B: ['1rem', { lineHeight: '1.4rem', fontWeight: '600' }], // Body 3 (SemiBold)
        body3R: ['1rem', { lineHeight: '1.6rem', fontWeight: '400' }], // Body 3 (Regular)
        caption1B: ['0.875rem', { lineHeight: '1.225rem', fontWeight: '600' }], // Caption 1 (SemiBold)
        caption1R: ['0.875rem', { lineHeight: '1.225rem', fontWeight: '400' }], // Caption 1 (Regular)
        caption2B: ['0.75rem', { lineHeight: '1.125rem', fontWeight: '600' }], // Caption 2 (SemiBold)
        caption2M: ['0.75rem', { lineHeight: '1.125rem', fontWeight: '500' }], // Caption 2 (Medium)
        caption3B: ['0.625rem', { lineHeight: '1.125rem', fontWeight: '600' }], // Caption 3 (SemiBold)
        caption3M: ['0.625rem', { lineHeight: '1.125rem', fontWeight: '500' }], // Caption 3 (Medium)
      },
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
    },
    screens: {
      laptop: { max: '1360px' },
      tablet: { max: '1050px' },
      mobile: { max: '640px' },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.bg-gold-gradient': {
          background: 'linear-gradient(145.91deg, #FFBF0F 2.83%, #FFDB79 49.64%, #997309 110.44%)',
        },
        '.bg-silver-gradient': {
          background: 'linear-gradient(145.91deg, #949494 2.83%, #CECECE 49.64%, #7A7A7A 110.44%)',
        },
        '.bg-bronze-gradient': {
          background: 'linear-gradient(145.91deg, #E27F39 2.83%, #F19B3F 49.64%, #782C09 110.44%)',
        },
      });
    },
  ],
};

export default config;
