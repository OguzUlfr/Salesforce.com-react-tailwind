const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'Oswald': ['Oswald', ...defaultTheme.fontFamily.sans],
        'Lato': ['Lato', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        'mainBlue':"#0b5cab",
        'mainDarkBlue':"#032D60",
      },
      backgroundImage: {
        'forest-back': "url('https://www.salesforce.com/content/dam/web/en_us/www/images/home/email-signup-bg-footer-2.png')",
        'signup-back': "url('https://www.salesforce.com/content/dam/web/en_us/www/images/home/footer-bg.png')"
      }
    }
  },
  plugins: [],
}
