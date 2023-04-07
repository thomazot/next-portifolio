import { InputHTMLAttributes } from 'react'
import Text from 'common/Text'

import * as S from './Checkbox.styles'

export type CheckboxProps = {
  id: string
  label?: string
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox: React.FC<CheckboxProps> = ({ id, label, ...props }) => (
  <>
    <S.Input id={id} type="checkbox" {...props} />
    <S.Label htmlFor={id}>{label && <Text>{label}</Text>}</S.Label>
  </>
)

export default Checkbox
