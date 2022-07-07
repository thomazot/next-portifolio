import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.secundary};
  color: ${({ theme }) => theme.colors.secundaryContrast};
`
