import { ButtonHTMLAttributes } from 'react'

import * as S from './Button.styles'
import { SizeType } from 'styles/theme'

export type ThemeType =
  | 'primary'
  | 'secondary'
  | 'transparent'
  | 'theme'
  | 'theme-inverted'

export type ButtonProps = {
  themeType?: ThemeType
  inline?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconSize?: SizeType
  children?: React.ReactNode | React.ReactNode[]
  fontSize?: SizeType
} & ButtonHTMLAttributes<HTMLButtonElement>

const Checkbox: React.FC<ButtonProps> = ({
  icon,
  loading,
  children,
  iconSize = SizeType.MEDIUM,
  fontSize = SizeType.MEDIUM,
  ...props
}) => (
  <S.Button noText={!children} loading={(!!loading).toString()} {...props}>
    {icon && (
      <S.Icon size={iconSize} center as="i">
        {icon}
      </S.Icon>
    )}
    {children && (
      <S.Text size={fontSize} as="span">
        {children}
      </S.Text>
    )}
  </S.Button>
)

export default Checkbox
