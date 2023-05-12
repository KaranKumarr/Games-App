// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: '#0B1416',
        primary: '#64A36F',
        'primary-light': '#CEF0B9',
        'accent-contrast': '#FFF'
      }
    },
  },
  plugins: [],
};
