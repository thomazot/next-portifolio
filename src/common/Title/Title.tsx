import styled, { css } from 'styled-components'
import { SizeType } from 'styles/theme'

export type TitleProps = {
  size?: SizeType
}

const Title = styled.h1<TitleProps>`
  ${({ theme, size = SizeType.EXTRA_EXTRA_LARGE }) => css`
    font-size: calc(${theme.typography.sizes[size]} + 5px);
    line-height: 1.3;

    @media screen and (min-width: ${theme.breakpoint.tablet}) {
      font-size: calc(${theme.typography.sizes[size]} + 10px);
    }
  `}
`

export default Title
