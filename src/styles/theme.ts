export default {
  gap: 32,
  viewport: '1024px',
  radius: '3px',
  breakpoint: {
    tablet: '1024px',
    desktop: '1440px'
  },
  colors: {
    background: '#fff',
    text: '#333',
    dark: {
      background: '#333',
      text: '#fff'
    },
    primary: '#00abe4',
    primaryContrast: '#fff',
    secundary: '#364a73',
    secundaryContrast: '#fff',
    tertiary: '#1E1E21',
    tertiaryContrast: '#fff',
    gray: '#eee',
    error: '#f00'
  }
} as const
