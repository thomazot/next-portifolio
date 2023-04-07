import { ButtonHTMLAttributes } from 'react'

import * as S from './Button.styles'

export type ButtonProps = {
  secondary?: boolean
  inline?: boolean
  loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Checkbox: React.FC<ButtonProps> = ({ loading = false, ...props }) => (
  <S.Button loading={loading.toString()} {...props} />
)

export default Checkbox
