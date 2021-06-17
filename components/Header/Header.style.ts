import styled from 'styled-components'

export const Header = styled.header`
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: ${({ theme }) => `${theme.gap}px`};
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.background};

  .container {
    width: ${({ theme }) => theme.viewport};
    max-width: calc(100% - ${({ theme }) => `${theme.gap}px`});
    margin: 0 auto;
    padding: ${({ theme }) => `${theme.gap}px`} 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`
