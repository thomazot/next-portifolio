import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    display: block;
    margin: 0 auto;
    position: relative;
    max-width: 100%;
    min-height: 100%;
    overflow: hidden;
    padding: 0 16px;

    @media screen and (min-width: ${theme.breakpoint.tablet}) {
      max-width: ${theme.breakpoint.tablet};
      max-width: 90%;
      padding: 0;
    }

    @media screen and (min-width: ${theme.breakpoint.desktop}) {
      max-width: ${theme.breakpoint.desktop};
    }
  `}
`

export default Container
