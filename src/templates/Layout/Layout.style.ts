import Container from 'common/Container'
import styled from 'styled-components'

export const ContainerLayout = styled.div`
  ${Container} {
    width: ${({ theme }) => theme.viewport};
    position: relative;
    max-width: calc(100% - ${({ theme }) => `${theme.gap}px`});
    margin: 0 auto;
    font-size: 14px;
    line-height: 1.8;
    img {
      max-width: 100%;
    }
    ul {
      padding-left: ${({ theme }) => `${theme.gap}px`};
    }
    a {
      color: ${({ theme }) => theme.colors.text};

      &:hover {
        @media (min-width: 992px) {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
    &,
    main {
      width: 100%;
      min-height: 100vh;
      max-height: 100%;
    }
  }
  section {
    overflow: hidden;
    width: 100%;
  }
`
