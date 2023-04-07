import React, { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import * as S from './FieldText.styles'

export interface FieldTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: FieldError
  disabled?: boolean
}

const FieldText = React.forwardRef<HTMLInputElement, FieldTextProps>(
  ({ label, error, disabled, ...props }, ref) => (
    <S.Container disabled={disabled} error={!!error}>
      <S.Label>{label}</S.Label>
      <S.Input ref={ref} {...props} />
      <S.Error show={!!error}>{error?.message}</S.Error>
    </S.Container>
  )
)

FieldText.displayName = 'FieldText'

export default FieldText
