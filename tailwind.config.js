const {colors, screens} = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    purgeLayersByDefault        : true,
    removeDeprecatedGapUtilities: true,
  },

  plugins: [],
  purge  : false,

  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          800: '#2C4259',
        },

        gray: {
          ...colors.gray,
          200: '#f5f5f5',
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

      gridColumnStart: {
        15: '15',
        21: '21',
      },

      gridTemplateColumns: {
        '1fr/minmax(0/360)/1fr': '1fr minmax(0, calc(360 * .25rem)) 1fr',
        '23/1fr'               : 'repeat(23, 1fr)',
      },

      margin: {
        '-0.5': 'calc(-.5 * .25rem)',
      },

      padding: {
        '4/3': 'calc(4 / 3 * 100%)',
      },
    },

    fontFamily: {
      'main': ['Poppins', 'sans-serif'],
    },

    screens: {
      'xs': '480px',
      ...screens,
    },
  },

  variants: {},
}
