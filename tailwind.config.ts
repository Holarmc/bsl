import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'on-error-container': '#93000a',
        'secondary': '#366b00',
        'surface-variant': '#e1e3e4',
        'secondary-fixed': '#acf770',
        'surface': '#f8f9fa',
        'background': '#f8f9fa',
        'tertiary': '#5f5e5f',
        'primary-container': '#00aeef',
        'on-primary': '#ffffff',
        'on-secondary-fixed': '#0c2000',
        'on-secondary': '#ffffff',
        'secondary-fixed-dim': '#92da57',
        'inverse-primary': '#82cfff',
        'on-tertiary-fixed': '#1b1b1c',
        'on-surface-variant': '#3e4850',
        'on-tertiary-container': '#39393a',
        'outline': '#6e7881',
        'tertiary-fixed': '#e5e2e3',
        'tertiary-container': '#a4a2a3',
        'surface-container-lowest': '#ffffff',
        'surface-dim': '#d9dadb',
        'on-tertiary-fixed-variant': '#474647',
        'on-primary-container': '#003e58',
        'surface-container': '#edeeef',
        'surface-bright': '#f8f9fa',
        'primary-fixed-dim': '#82cfff',
        'primary-fixed': '#c6e7ff',
        'on-background': '#191c1d',
        'on-error': '#ffffff',
        'on-surface': '#191c1d',
        'surface-tint': '#00658d',
        'secondary-container': '#acf770',
        'surface-container-highest': '#e1e3e4',
        'error': '#ba1a1a',
        'on-secondary-fixed-variant': '#275000',
        'on-primary-fixed': '#001e2d',
        'surface-container-high': '#e7e8e9',
        'surface-container-low': '#f3f4f5',
        'on-secondary-container': '#3a7100',
        'inverse-surface': '#2e3132',
        'outline-variant': '#bdc8d1',
        'inverse-on-surface': '#f0f1f2',
        'on-tertiary': '#ffffff',
        'error-container': '#ffdad6',
        'on-primary-fixed-variant': '#004c6b',
        'primary': '#00658d',
        'tertiary-fixed-dim': '#c8c6c7'
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px'
      },
      spacing: {
        'gutter': '24px',
        'stack-md': '16px',
        'margin-mobile': '16px',
        'container-max': '1280px',
        'margin-desktop': '40px',
        'unit': '8px',
        'stack-sm': '8px',
        'stack-lg': '32px',
        'section-padding': '80px'
      },
      fontFamily: {
        'h1': ['Manrope', 'sans-serif'],
        'h2': ['Manrope', 'sans-serif'],
        'label-sm': ['Inter', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'h3': ['Manrope', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h2': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'label-sm': ['12px', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'h3': ['24px', { lineHeight: '1.3', fontWeight: '600' }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
