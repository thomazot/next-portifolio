import styled, { css } from 'styled-components'

export const Header = styled.header`
  ${({ theme }) => css`
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
    margin-bottom: ${`${theme.gap}px`};
    position: sticky;
    width: 100%;
    top: 0;
    background: white;
    padding: ${theme.gap / 2}px 0;
    z-index: 2;
  `}
`
