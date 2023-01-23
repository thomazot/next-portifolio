import Container from 'common/Container'
import styled, { css } from 'styled-components'

export const ContainerHome = styled(Container)`
  ${({ theme }) => css`
    --font-size-text: 5vw;
    --secundary: ${theme.colors.secundaryContrast};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${theme.colors.secundary};
    color: ${theme.colors.secundaryContrast};
  `}
`

export const Content = styled.div`
  padding: 16px;
  margin-bottom: 32px;
`
export const Title = styled.div`
  h1 {
    display: none;
  }
`
