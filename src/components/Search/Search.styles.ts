import styled from 'styled-components'
import { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    display: block;
    flex: 1;
    color: ${theme.colors.primary};
  `}
`
