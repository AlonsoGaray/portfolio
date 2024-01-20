/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefce8',
          100: '#fffbc2',
          200: '#fff387',
          300: '#ffe543',
          400: '#ffd41f',
          500: '#efb803',
          600: '#ce8e00',
          700: '#a46404',
          800: '#884e0b',
          900: '#734010',
          950: '#432105'
        },
        lochmara: {
          50: '#f0f9ff',
          100: '#dff2ff',
          200: '#b9e6fe',
          300: '#7bd4fe',
          400: '#34befc',
          500: '#0aa7ed',
          600: '#0085cb',
          700: '#0074b4',
          800: '#055a87',
          900: '#0a4a70',
          950: '#072f4a'
        },
        bush: {
          50: '#f6f3ff',
          100: '#efe9fe',
          200: '#e1d6fe',
          300: '#ccb5fd',
          400: '#b38afb',
          500: '#9c5bf7',
          600: '#9039ee',
          700: '#8027da',
          800: '#6b20b7',
          900: '#5b1d99',
          950: '#371065'
        }
      }
    }
  }
}
