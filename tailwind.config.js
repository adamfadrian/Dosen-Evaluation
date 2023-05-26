/** @type {import('tailwindcss').Config} */

module.exports =  {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark-alta": "#19345E",
        "orange-alta": "#F47522",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    base: false,
    darkTheme: "light",
    themes: [
      {
        mytheme: {

          "primary": "#19345E",

          "secondary": "#0891b2",

          "accent": "#F47522",

          "neutral": "#CCCCCC",

          "base-100": "#FFFFFF",

          "info": "#8DCAC1",

          "success": "#9DB787",

          "warning": "#FFD25F",

          "error": "#FC9581",
        },
      },
    ]
  },
}
