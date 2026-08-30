/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#069494',
          navy: '#000000',
          cream: '#F9F4EA',
          coral: '#FF7F50',
        },
      },
      boxShadow: {
        soft: '0 20px 45px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
