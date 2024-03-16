/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/bg-pattern-design-pages-intro-mobile.svg')",
      },
      colors: {
        'salmon': '#E7816B',
        'peach':'#E7816B',
        'light-peach':'#FFAD9B',
        'buraku': '#1D1C1E',
        'dark-grey' : '#333136',
        'light-grey' : '#F1F3F5',
       
      },
      scale: {
        '200': '2.00',
      },
      rotate: {
        '270': '270deg',
      }
    },
  },
  plugins: [],
};
