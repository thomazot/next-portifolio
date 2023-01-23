import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    display: block;
    margin: 0 auto;
    position: relative;
    max-width: 100%;
    min-height: 100%;
    overflow: hidden;

    @media screen and (min-width: ${theme.breakpoint.tablet}) {
      max-width: ${theme.breakpoint.tablet};
      max-width: 90%;
    }

    @media screen and (min-width: ${theme.breakpoint.desktop}) {
      max-width: ${theme.breakpoint.desktop};
    }
  `}
`

export default Container
