import React, { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import * as S from './FieldText.styles'

export type IconPositionType = 'right' | 'left'

export interface FieldTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: IconPositionType
  loading?: boolean
}

const FieldText = React.forwardRef<HTMLInputElement, FieldTextProps>(
  (
    { label, error, disabled, icon, iconPosition = 'right', loading, ...props },
    ref
  ) => (
    <S.Container disabled={disabled} error={!!error}>
      <S.Input
        hasIcon={!!icon}
        iconPosition={iconPosition}
        ref={ref}
        {...props}
      />
      {label && <S.Label>{label}</S.Label>}
      <S.Error show={!!error}>{error?.message}</S.Error>
      {icon && !loading && (
        <S.Icon iconPosition={iconPosition} as="i">
          {icon}
        </S.Icon>
      )}
      {icon && loading && (
        <S.Icon iconPosition={iconPosition} as="i">
          <S.Loading />
        </S.Icon>
      )}
    </S.Container>
  )
)

FieldText.displayName = 'FieldText'

export default FieldText
