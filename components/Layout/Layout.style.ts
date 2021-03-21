import styled from 'styled-components'

export const Container = styled.div`
  .container {
    width: ${({ theme }) => theme.viewport};
    max-width: calc(100% - ${({ theme }) => `${theme.gap}px`});
    margin: 0 auto;
    font-size: 14px;
    line-height: 1.4;
    img {
      max-width: 100%;
    }
    ul {
      padding-left: ${({ theme }) => `${theme.gap}px`};
    }
  }
`
