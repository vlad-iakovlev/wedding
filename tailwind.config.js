const {colors} = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    purgeLayersByDefault        : true,
    removeDeprecatedGapUtilities: true,
  },

  plugins: [],
  purge  : [],

  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          800: '#2C4259',
        },

        gray: {
          ...colors.gray,
          300: '#e7e7e7',
          500: '#A4A4A4',
        },

        red: {
          ...colors.red,
          500: '#FF283E',
        },
      },

      fontSize: {
        40: 'calc(40 * 1rem / 16)',
      },

      gridTemplateColumns: {
        '1fr/minmax(0/360)/1fr': '1fr minmax(0, calc(360 * .25rem)) 1fr',
      },

      lineHeight: {
        'extra-tight': '1.125',
      },

      margin: {
        '-0.5' : 'calc(-.5 * .25rem)',
        '-0.75': 'calc(-.75 * .25rem)',
      },
    },

    fontFamily: {
      'main': ['Poppins', 'sans-serif'],
    },
  },

  variants: {},
}
