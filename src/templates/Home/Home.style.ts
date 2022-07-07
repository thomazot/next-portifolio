import styled from 'styled-components'

export const Container = styled.div`
  --font-size-text: 5vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.secundary};
  color: ${({ theme }) => theme.colors.secundaryContrast};
`

export const Content = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.secundaryContrast};
  border-radius: 8px;
  margin-bottom: 32px;
`
export const Title = styled.h1`
  span {
    display: none;
  }
`
