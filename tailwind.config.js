module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    inset: {
      '0': 0,
      // ...
     '64': '35rem',
     '111': '76rem',
    },
    screens:{
      "lg": "1111px",
      "md":"732px",
     "sm":"320px"
    },
    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#107EC3',
      'secondary': '#FFFFFF',
      'danger': '#e3342f',
      'liner': '#6F7CB2',
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#0075C8',
      'secondary': '#3E9FE3',
      'danger': '#6F7CB2',
     }),
     backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#0075C8',
      'secondary': '#3E9FE3',
      'danger': '#6F7CB2',
      'wall': '#E5E5E5',
      'plane': '#FFFFFF',
      'deep': '#3391D3',

     }),
    extend: {
      spacing: {
        '72': '18.75rem',
        '65': '65rem',
        '96': '24rem',
        '34': '34rem',
        '27': '27rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
