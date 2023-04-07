export type ModeType = 'light' | 'dark'

export enum SizeType {
  EXTRA_EXTRA_LARGE = 'XXL',
  EXTRA_LARGE = 'XL',
  LARGE = 'LG',
  MEDIUM = 'MD',
  SMALL = 'SM',
  EXTRA_SMALL = 'XS',
  EXTRA_EXTRA_SMALL = 'XXS'
}

export type BreakpointType = {
  tablet: string
  desktop: string
}

export type ColorsType = {
  background: string
  backgroundContrast: string
  text: string
  textContrast: string
  primary: string
  primaryContrast: string
  secundary: string
  secundaryContrast: string
  tertiary: string
  tertiaryContrast: string
  gray: string
  error: string
  disabled: string
}
export type TypographySizeType = {
  [SizeType.EXTRA_EXTRA_LARGE]: string
  [SizeType.EXTRA_LARGE]: string
  [SizeType.LARGE]: string
  [SizeType.MEDIUM]: string
  [SizeType.SMALL]: string
  [SizeType.EXTRA_SMALL]: string
  [SizeType.EXTRA_EXTRA_SMALL]: string
}
export type TypographyType = {
  sizes: TypographySizeType
}

export type ThemeType = {
  mode: ModeType
  gap: number
  viewport: string
  radius: string
  opacity: number
  breakpoint: BreakpointType
  colors: ColorsType
  typography: TypographyType
}

const theme: ThemeType = {
  mode: 'light',
  gap: 32,
  viewport: '1024px',
  radius: '3px',
  opacity: 0.5,
  breakpoint: {
    tablet: '1024px',
    desktop: '1440px'
  },
  colors: {
    background: '#fff',
    backgroundContrast: '#333',
    text: '#333',
    textContrast: '#fff',
    primary: '#00abe4',
    primaryContrast: '#fff',
    secundary: '#364a73',
    secundaryContrast: '#fff',
    tertiary: '#1E1E21',
    tertiaryContrast: '#fff',
    gray: '#eee',
    error: '#f00',
    disabled: '#eee'
  },
  typography: {
    sizes: {
      [SizeType.EXTRA_EXTRA_LARGE]: '32px',
      [SizeType.EXTRA_LARGE]: '24px',
      [SizeType.LARGE]: '16px',
      [SizeType.MEDIUM]: '14px',
      [SizeType.SMALL]: '12px',
      [SizeType.EXTRA_SMALL]: '10px',
      [SizeType.EXTRA_EXTRA_SMALL]: '8px'
    }
  }
}

export const dark: ThemeType = {
  ...theme,
  mode: 'dark',
  colors: {
    ...theme.colors,
    background: '#333',
    backgroundContrast: '#fff',
    text: '#fff',
    textContrast: '#333'
  }
}

export const light: ThemeType = theme

export default theme
