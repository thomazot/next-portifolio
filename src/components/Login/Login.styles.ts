import styled, { css } from 'styled-components'

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    gap: ${theme.gap}px;
    padding: ${theme.gap}px;
    border: solid 1px ${theme.colors.gray};
    border-radius: ${theme.radius};
    width: 500px;
    max-width: calc(100% - ${theme.gap}px);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  `}
`
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  display: block;
  width: 100%;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`
