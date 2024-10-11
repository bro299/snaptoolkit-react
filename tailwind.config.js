module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        dark: {
          100: '#1F2937',
          200: '#111827',
          300: '#374151',
          400: '#4B5563',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};