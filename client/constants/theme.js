const sizes = {
  // Size for normal devices
  text: '1.8rem',
  subTitle: '2.1rem',
  title: '2.7rem',
  subHeader: '3.2rem',
  header: '6.1rem',

  // Size for smallers devices
  smallers: {
    text: '1.75rem',
    subTitle: '1.9rem',
    title: '2.5rem',
    subHeader: '3rem',
    header: '5.9rem'
  }
}

const darkTheme = {
  color: {
    text: '#ffffff',
    primary: '#14161a',
    secondary: '#a8a8a9',
    tertiary: '#818182',
    background:
      'linear-gradient(140deg,rgba(85, 85, 85, 1) 0%,rgba(45, 46, 47, 1) 30%,rgba(20, 22, 26, 1) 60%)'
  },
  size: { ...sizes }
}

const lightTheme = {
  color: {
    text: '#333333',
    primary: '#e6e6e6',
    secondary: '#818182',
    tertiary: '#ffffff',
    background:
      'linear-gradient(140deg,rgba(85, 85, 85, 1) 0%,rgba(45, 46, 47, 1) 30%,rgba(20, 22, 26, 1) 60%)',

    // Filters to exchange of the theme
    filter:
      'invert(100%) sepia(0%) saturate(200%) hue-rotate(133deg) brightness(98%) contrast(100%);',
    backgroundFilter:
      'invert(100%) sepia(0%) saturate(100%) hue-rotate(210deg) brightness(140%) contrast(65%);'
  },
  size: { ...sizes }
}

export { darkTheme, lightTheme }
