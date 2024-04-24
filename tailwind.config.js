/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'card-back': "url('../public/images/card-back.png')",
        'pamper-date': "url('../public/images/pamper-date.png')",
        spa: "url('../public/images/spa.png')",
        salon: "url('../public/images/salon.png')",
        't-and-j': "url('../public/images/t-and-j.png')",
        'new-lounge': "url('../public/images/new-lounge.png')",
        nora: "url('../public/images/nora.png')",
        'your-spa-salon-selection':
          "url('../public/images/your-spa-salon-selection.png')",
        'shopping-date': "url('../public/images/shopping-date.png')",
        greenbelt: "url('../public/images/greenbelt.png')",
        'market-market': "url('../public/images/market-market.png')",
        'your-mall-selection':
          "url('../public/images/your-mall-selection.png')",
        vertis: "url('../public/images/vertis.png')",
        podium: "url('../public/images/podium.png')",
        'staycation-date': "url('../public/images/staycation-date.png')",
        'purico-cabin': "url('../public/images/purico-cabin.png')",
        scenery: "url('../public/images/scenery.png')",
        'your-staycation-selection':
          "url('../public/images/your-staycation-selection.png')",
        'cielo-alto': "url('../public/images/cielo-alto.png')",
      },
    },
  },
  plugins: [],
});
