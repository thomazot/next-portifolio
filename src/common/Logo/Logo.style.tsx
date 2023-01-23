import styled, { css } from 'styled-components'
import LogoIcon from 'assets/imgs/logo.svg'
import { LogoSize } from './Logo'

const LogoStyleModifier = {
  XS: css`
    height: 10px;
  `,
  S: css`
    height: 20px;
  `,
  R: css`
    height: 40px;
  `,
  L: css`
    height: 60px;
  `,
  XL: css`
    height: 80px;
  `
}

export const LogoStyle = styled(({ className }: { className?: string }) => (
  <LogoIcon className={className} />
))<{ size: LogoSize }>`
  ${({ size }) => css`
    width: auto;
    ${size && LogoStyleModifier[size]}
  `}
`
